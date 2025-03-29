import { TaskModel } from "./taskModel";

const models = {
    taskModel: new TaskModel(),
};

export default models;
export type Models = typeof models;

