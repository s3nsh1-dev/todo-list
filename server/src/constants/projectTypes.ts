export type taskDetailsType = {
  taskName: string;
  status: "DONE" | "ONGOING";
};
export type historyLogType = {
  histDate: string;
  histResult: string;
};
export type paletteType = {
  id: string;
  color: string;
};
export type weeklyLogsType = {
  weekNum: string;
  wResult: "SUCCESS" | "FAILED";
};
export type weeklyGoalsListType = {
  wGoalsName: string;
  wGoalsStatus: "ONGOING" | "DONE";
};
export interface monthlyGoalsListType {
  GoalName: string;
  status: "ONGOING" | "DONE";
}
export interface monthlyHistoryType {
  MonthlyName: string;
  status: "SUCCESS" | "FAILED";
}
export type YearlyGoalType = {
  yearlyGoalName: string;
  status: "ONGOING" | "DONE";
};
export type YearlyHistoryLogType = {
  yearNum: string;
  status: "SUCCESS" | "FAILED";
};
export interface notesTypes {
  title: string;
  content: string;
  date: string;
}
