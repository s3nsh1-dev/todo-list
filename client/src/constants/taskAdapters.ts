import type {
  monthlyGoalsListType,
  taskDetailsType,
  weeklyGoalsListType,
  YearlyGoalType,
} from "./commonInterfaces";

export type TaskStatus = "ONGOING" | "DONE";

export type TaskWithOrder = {
  _id: string;
  order: number;
};

export type ReorderPayload = {
  orderedTasks: {
    _id: string;
    order: number;
  }[];
};

export interface TaskAdapter<T extends TaskWithOrder> {
  getId: (task: T) => string;
  getName: (task: T) => string;
  getStatus: (task: T) => TaskStatus;
}

export const dailyTaskAdapter: TaskAdapter<taskDetailsType> = {
  getId: (task) => task._id,
  getName: (task) => task.taskName,
  getStatus: (task) => task.status,
};

export const weeklyTaskAdapter: TaskAdapter<weeklyGoalsListType> = {
  getId: (task) => task._id,
  getName: (task) => task.wGoalsName,
  getStatus: (task) => task.wGoalsStatus,
};

export const monthlyTaskAdapter: TaskAdapter<monthlyGoalsListType> = {
  getId: (task) => task._id,
  getName: (task) => task.GoalName,
  getStatus: (task) => task.status,
};

export const yearlyTaskAdapter: TaskAdapter<YearlyGoalType> = {
  getId: (task) => task._id,
  getName: (task) => task.yearlyGoalName,
  getStatus: (task) => task.status,
};
