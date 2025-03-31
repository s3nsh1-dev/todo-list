export type taskDetailsType = {
  taskId: string;
  taskName: string;
  status: "DONE" | "ONGOING";
};
export type historyLogType = {
  histId: string;
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
  id: string;
  weekNum: string;
  wResult: "SUCCESS" | "FAILED";
};

export type weeklyGoalsListType = {
  id: string;
  wGoalsName: string;
  wGoalsStatus: "ONGOING" | "DONE";
};
