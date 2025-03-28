export interface taskDetailsType {
  taskId: string;
  taskName: string;
  status: "DONE" | "ONGOING";
}
export interface historyLogType {
  histId: string;
  histResult: string;
}
export interface dailyTasksType {
  taskDetails: taskDetailsType[];
  previousTasksLogs: historyLogType[];
}
