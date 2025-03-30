export interface taskDetailsType {
  taskId: string;
  taskName: string;
  status: "DONE" | "ONGOING";
}
export interface historyLogType {
  histId: string;
  histDate: string;
  histResult: string;
}
export interface dailyTasksType {
  taskDetails: taskDetailsType[];
  previousTasksLogs: historyLogType[];
}
export interface paletteType {
  id: string;
  color: string;
}

export interface weeklyGoalObjectType {
  weeklyGoalsList: weeklyGoalsListType[];
  weeklyLogs: weeklyLogsType[];
}

export interface weeklyLogsType {
  id: string;
  weekNum: string;
  wResult: string;
}

export interface weeklyGoalsListType {
  id: string;
  wGoalsName: string;
  wGoalsStatus: string;
}
