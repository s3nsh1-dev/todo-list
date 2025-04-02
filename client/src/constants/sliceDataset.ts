import {
  weeklyLogsType,
  weeklyGoalsListType,
  historyLogType,
  taskDetailsType,
  monthlyGoalsListType,
  monthlyHistoryType,
} from "./commonInterfaces";

export const weeklyLogs: weeklyLogsType[] = [
  { id: "1", weekNum: "1", wResult: "SUCCESS" },
  { id: "2", weekNum: "2", wResult: "FAILED" },
  { id: "3", weekNum: "3", wResult: "SUCCESS" },
  { id: "4", weekNum: "4", wResult: "FAILED" },
  { id: "5", weekNum: "5", wResult: "SUCCESS" },
  { id: "6", weekNum: "6", wResult: "SUCCESS" },
  { id: "7", weekNum: "7", wResult: "FAILED" },
];

export const weeklyGoalsList: weeklyGoalsListType[] = [
  { id: "1", wGoalsName: "Exercise 5 times a week", wGoalsStatus: "DONE" },
  { id: "2", wGoalsName: "Read 2 books", wGoalsStatus: "ONGOING" },
  { id: "3", wGoalsName: "Improve coding skills", wGoalsStatus: "DONE" },
  { id: "4", wGoalsName: "Meditate daily", wGoalsStatus: "ONGOING" },
  { id: "5", wGoalsName: "Eat healthy meals", wGoalsStatus: "DONE" },
  {
    id: "6",
    wGoalsName: "Complete a side project",
    wGoalsStatus: "ONGOING",
  },
  { id: "7", wGoalsName: "Limit social media usage", wGoalsStatus: "ONGOING" },
];

export const taskDetails: taskDetailsType[] = [
  { taskId: "0", taskName: "Complete project report", status: "ONGOING" },
  { taskId: "1", taskName: "Review pull requests", status: "ONGOING" },
  { taskId: "2", taskName: "Fix UI bugs in dashboard", status: "DONE" },
  { taskId: "3", taskName: "Plan team meeting agenda", status: "ONGOING" },
  { taskId: "4", taskName: "Write documentation for API", status: "DONE" },
  { taskId: "5", taskName: "Respond to client emails", status: "ONGOING" },
  {
    taskId: "6",
    taskName: "Refactor authentication module",
    status: "ONGOING",
  },
  { taskId: "7", taskName: "Test new feature deployment", status: "DONE" },
  {
    taskId: "8",
    taskName: "Update dependencies in package.json",
    status: "ONGOING",
  },
  { taskId: "9", taskName: "Optimize database queries", status: "DONE" },
  {
    taskId: "10",
    taskName: "Prepare slides for presentation",
    status: "ONGOING",
  },
  { taskId: "11", taskName: "Fix login validation issue", status: "ONGOING" },
  { taskId: "12", taskName: "Conduct code review for intern", status: "DONE" },
  { taskId: "13", taskName: "Schedule one-on-one meetings", status: "ONGOING" },
  {
    taskId: "14",
    taskName: "Draft blog post on React performance",
    status: "DONE",
  },
];
export const previousTasksLogs: historyLogType[] = [
  { histId: "0", histDate: "Mon, Mar.24.2025", histResult: "SUCCESS" },
  { histId: "1", histDate: "Tue, Mar.25.2025", histResult: "SUCCESS" },
  { histId: "2", histDate: "Wed, Mar.26.2025", histResult: "FAILED" },
  { histId: "3", histDate: "Thu, Mar.27.2025", histResult: "SUCCESS" },
  { histId: "4", histDate: "Fri, Mar.28.2025", histResult: "FAILED" },
  { histId: "5", histDate: "Sat, Mar.29.2025", histResult: "SUCCESS" },
  { histId: "6", histDate: "Sun, Mar.30.2025", histResult: "FAILED" },
  { histId: "7", histDate: "Mon, Mar.31.2025", histResult: "SUCCESS" },
  { histId: "8", histDate: "Tue, Apr.01.2025", histResult: "FAILED" },
  { histId: "9", histDate: "Wed, Apr.02.2025", histResult: "SUCCESS" },
  { histId: "10", histDate: "Thu, Apr.03.2025", histResult: "FAILED" },
  { histId: "11", histDate: "Fri, Apr.04.2025", histResult: "SUCCESS" },
  { histId: "12", histDate: "Sat, Apr.05.2025", histResult: "SUCCESS" },
  { histId: "13", histDate: "Sun, Apr.06.2025", histResult: "FAILED" },
  { histId: "14", histDate: "Mon, Apr.07.2025", histResult: "SUCCESS" },
  { histId: "15", histDate: "Tue, Apr.08.2025", histResult: "SUCCESS" },
  { histId: "16", histDate: "Wed, Apr.09.2025", histResult: "FAILED" },
  { histId: "17", histDate: "Thu, Apr.10.2025", histResult: "SUCCESS" },
  { histId: "18", histDate: "Fri, Apr.11.2025", histResult: "FAILED" },
  { histId: "19", histDate: "Sat, Apr.12.2025", histResult: "SUCCESS" },
  { histId: "20", histDate: "Sun, Apr.13.2025", histResult: "FAILED" },
];

export const monthlyHistory: monthlyHistoryType[] = [
  { id: "", MonthlyName: "", status: "SUCCESS" },
  { id: "", MonthlyName: "", status: "FAILED" },
  { id: "", MonthlyName: "", status: "SUCCESS" },
  { id: "", MonthlyName: "", status: "FAILED" },
  { id: "", MonthlyName: "", status: "SUCCESS" },
];

export const monthlyGoalsList: monthlyGoalsListType[] = [
  { id: "", GoalName: "", status: "ONGOING" },
  { id: "", GoalName: "", status: "DONE" },
  { id: "", GoalName: "", status: "ONGOING" },
  { id: "", GoalName: "", status: "ONGOING" },
  { id: "", GoalName: "", status: "DONE" },
  { id: "", GoalName: "", status: "ONGOING" },
  { id: "", GoalName: "", status: "ONGOING" },
  { id: "", GoalName: "", status: "DONE" },
  { id: "", GoalName: "", status: "ONGOING" },
];
