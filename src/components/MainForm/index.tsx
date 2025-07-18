import { PlayCircleIcon } from 'lucide-react';
import { Cycles } from '../Cycles';
import { DefaultButton } from '../DefaultButton';
import { DefaultInput } from '../DefaultInput';

export const MainForm = () => {
  return (
    <form className='form' action=''>
      <div className='formRow'>
        <DefaultInput
          labelText='oioi'
          id='meuInput'
          type='text'
          title='titulo'
          placeholder='digite algo'
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
