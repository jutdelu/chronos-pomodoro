import type { TaskStateModel } from "./TaskStateModel";

export type TaskModel = {
  id: string;
  name: string;
  duration: number;
  startDate: number | null; //quando o timer chega ao fim
  completeDate: number | null; //quando a task é interrompida
  type: keyof TaskStateModel['config'];
};
