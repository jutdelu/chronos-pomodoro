import { PlayCircleIcon } from 'lucide-react';
import { useRef } from 'react';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import type { TaskModel } from '../../models/TaskModel';
import { getNextCycle } from '../../utils/getNextCycle';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export const MainForm = () => {
  const taskNameInput = useRef<HTMLInputElement>(null); // não utiliza o input em tempo real, somente quando o formulário for enviado
  const { state, setState } = useTaskContext();
  const handleCreateNewTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskNameInput.current === null) return;

    const taskName = taskNameInput.current.value.trim();

    if (!taskName) {
      alert('Digite o nome da tarefa');
      return;
    }

    const newTask: TaskModel = {
      id: Date.now().toString(),
      name: taskName,
      startDate: Date.now(),
      completeDate: null,
      interruptDate: null,
      duration: 1,
      type: 'workTime',
    };

    const secondsRemaining = newTask.duration * 60;

    const nextCycle = getNextCycle(state.currentCycle);

    setState(prevState => {
      return {
        ...prevState,
        config: { ...prevState.config },
        activeTask: newTask,
        currentCycle: nextCycle,
        secondsRemaining, //não fixo
        formattedSecondsRemaining: '00:00', //não fixo
        tasks: [...prevState.tasks, newTask],
      };
    });
  };

  return (
    <form onSubmit={handleCreateNewTask} className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='task'
          id='meuInput'
          type='text'
          placeholder='digite algo'
          // value={taskName}
          // onChange={e=>setTaskName(e.target.value)}
          ref={taskNameInput}
        />
      </div>
      <div className='formRow'>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className='formRow'>
        <Cycles />
      </div>
      <div className='formRow'>
        <DefaultButton icon={<PlayCircleIcon />} color='green' />
      </div>
    </form>
  );
};
