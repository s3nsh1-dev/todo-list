export type taskDetailsType = {
  _id: string;
  taskName: string;
  status: "DONE" | "ONGOING";
  order: number;
};
export type historyLogType = {
  _id: string;
  histDate: string;
  histResult: string;
};
export type dailyTasksType = {
  taskDetails: taskDetailsType[];
  previousTasksLogs: historyLogType[];
};
export type paletteType = {
  id: string;
  color: string;
};

export type weeklyGoalObjectType = {
  weeklyGoalsList: weeklyGoalsListType[];
  weeklyLogs: weeklyLogsType[];
};

export type weeklyLogsType = {
  _id: string;
  weekNum: string;
  wResult: "SUCCESS" | "FAILED";
};

export type weeklyGoalsListType = {
  _id: string;
  wGoalsName: string;
  wGoalsStatus: "ONGOING" | "DONE";
  order: number;
};

export interface monthlyGoalsListType {
  _id: string;
  GoalName: string;
  status: "ONGOING" | "DONE";
  order: number;
}

export interface monthlyHistoryType {
  _id: string;
  MonthlyName: string;
  status: "SUCCESS" | "FAILED";
}

export type YearlyGoalType = {
  _id: string;
  yearlyGoalName: string;
  status: "ONGOING" | "DONE";
  order: number;
};

export type YearlyHistoryLogType = {
  _id: string;
  yearNum: string;
  status: "SUCCESS" | "FAILED";
};

export interface notesTypes {
  id: string;
  title: string;
  content: string;
  date: string;
}

export type UpdateNameType = {
  _id: string;
  newName: string;
};
