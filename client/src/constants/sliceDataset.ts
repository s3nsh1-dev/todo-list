import {
  weeklyLogsType,
  weeklyGoalsListType,
  historyLogType,
  taskDetailsType,
  monthlyGoalsListType,
  monthlyHistoryType,
  YearlyGoalType,
  YearlyHistoryLogType,
  notesTypes,
} from "./commonInterfaces";

export const weeklyLogs: weeklyLogsType[] = [
  { _id: "1", weekNum: "1", wResult: "SUCCESS" },
  { _id: "2", weekNum: "2", wResult: "FAILED" },
  { _id: "3", weekNum: "3", wResult: "SUCCESS" },
  { _id: "4", weekNum: "4", wResult: "FAILED" },
  { _id: "5", weekNum: "5", wResult: "SUCCESS" },
  { _id: "6", weekNum: "6", wResult: "SUCCESS" },
  { _id: "7", weekNum: "7", wResult: "FAILED" },
];

export const weeklyGoalsList: weeklyGoalsListType[] = [
  { _id: "1", wGoalsName: "Exercise 5 times a week", wGoalsStatus: "DONE" },
  { _id: "2", wGoalsName: "Read 2 books", wGoalsStatus: "ONGOING" },
  { _id: "3", wGoalsName: "Improve coding skills", wGoalsStatus: "DONE" },
  { _id: "4", wGoalsName: "Meditate daily", wGoalsStatus: "ONGOING" },
  { _id: "5", wGoalsName: "Eat healthy meals", wGoalsStatus: "DONE" },
  {
    _id: "6",
    wGoalsName: "Complete a side project",
    wGoalsStatus: "ONGOING",
  },
  { _id: "7", wGoalsName: "Limit social media usage", wGoalsStatus: "ONGOING" },
];

export const taskDetails: taskDetailsType[] = [
  { _id: "0", taskName: "Complete project report", status: "ONGOING" },
  { _id: "1", taskName: "Review pull requests", status: "ONGOING" },
  { _id: "2", taskName: "Fix UI bugs in dashboard", status: "DONE" },
  { _id: "3", taskName: "Plan team meeting agenda", status: "ONGOING" },
  { _id: "4", taskName: "Write documentation for API", status: "DONE" },
  { _id: "5", taskName: "Respond to client emails", status: "ONGOING" },
  {
    _id: "6",
    taskName: "Refactor authentication module",
    status: "ONGOING",
  },
  { _id: "7", taskName: "Test new feature deployment", status: "DONE" },
  {
    _id: "8",
    taskName: "Update dependencies in package.json",
    status: "ONGOING",
  },
  { _id: "9", taskName: "Optimize database queries", status: "DONE" },
  {
    _id: "10",
    taskName: "Prepare slides for presentation",
    status: "ONGOING",
  },
  { _id: "11", taskName: "Fix login validation issue", status: "ONGOING" },
  { _id: "12", taskName: "Conduct code review for intern", status: "DONE" },
  { _id: "13", taskName: "Schedule one-on-one meetings", status: "ONGOING" },
  {
    _id: "14",
    taskName: "Draft blog post on React performance",
    status: "DONE",
  },
];
export const previousTasksLogs: historyLogType[] = [
  { _id: "0", histDate: "Mon, Mar.24.2025", histResult: "SUCCESS" },
  { _id: "1", histDate: "Tue, Mar.25.2025", histResult: "SUCCESS" },
  { _id: "2", histDate: "Wed, Mar.26.2025", histResult: "FAILED" },
  { _id: "3", histDate: "Thu, Mar.27.2025", histResult: "SUCCESS" },
  { _id: "4", histDate: "Fri, Mar.28.2025", histResult: "FAILED" },
  { _id: "5", histDate: "Sat, Mar.29.2025", histResult: "SUCCESS" },
  { _id: "6", histDate: "Sun, Mar.30.2025", histResult: "FAILED" },
  { _id: "7", histDate: "Mon, Mar.31.2025", histResult: "SUCCESS" },
  { _id: "8", histDate: "Tue, Apr.01.2025", histResult: "FAILED" },
  { _id: "9", histDate: "Wed, Apr.02.2025", histResult: "SUCCESS" },
  { _id: "10", histDate: "Thu, Apr.03.2025", histResult: "FAILED" },
  { _id: "11", histDate: "Fri, Apr.04.2025", histResult: "SUCCESS" },
  { _id: "12", histDate: "Sat, Apr.05.2025", histResult: "SUCCESS" },
  { _id: "13", histDate: "Sun, Apr.06.2025", histResult: "FAILED" },
  { _id: "14", histDate: "Mon, Apr.07.2025", histResult: "SUCCESS" },
  { _id: "15", histDate: "Tue, Apr.08.2025", histResult: "SUCCESS" },
  { _id: "16", histDate: "Wed, Apr.09.2025", histResult: "FAILED" },
  { _id: "17", histDate: "Thu, Apr.10.2025", histResult: "SUCCESS" },
  { _id: "18", histDate: "Fri, Apr.11.2025", histResult: "FAILED" },
  { _id: "19", histDate: "Sat, Apr.12.2025", histResult: "SUCCESS" },
  { _id: "20", histDate: "Sun, Apr.13.2025", histResult: "FAILED" },
];

export const monthlyHistory: monthlyHistoryType[] = [
  { _id: "1", MonthlyName: "January 2025", status: "SUCCESS" },
  { _id: "2", MonthlyName: "February 2025", status: "FAILED" },
  { _id: "3", MonthlyName: "March 2025", status: "SUCCESS" },
  { _id: "4", MonthlyName: "April 2025", status: "FAILED" },
  { _id: "5", MonthlyName: "May 2025", status: "SUCCESS" },
];

export const monthlyGoalsList: monthlyGoalsListType[] = [
  { _id: "1", GoalName: "Increase monthly sales by 10%", status: "ONGOING" },
  { _id: "2", GoalName: "Launch new marketing campaign", status: "DONE" },
  {
    _id: "3",
    GoalName: "Improve customer support response time",
    status: "ONGOING",
  },
  { _id: "4", GoalName: "Reduce operational costs", status: "ONGOING" },
  { _id: "5", GoalName: "Expand into two new regions", status: "DONE" },
  { _id: "6", GoalName: "Implement a new CRM system", status: "ONGOING" },
  { _id: "7", GoalName: "Upgrade website performance", status: "ONGOING" },
  { _id: "8", GoalName: "Enhance social media engagement", status: "DONE" },
  {
    _id: "9",
    GoalName: "Train team on new sales strategies",
    status: "ONGOING",
  },
];

// Sample Yearly Goals Data
export const yearlyGoalList: YearlyGoalType[] = [
  {
    _id: "1",
    yearlyGoalName: "Increase company revenue by 20%",
    status: "ONGOING",
  },
  {
    _id: "2",
    yearlyGoalName: "Expand to international markets",
    status: "DONE",
  },
  { _id: "3", yearlyGoalName: "Hire 50 new employees", status: "ONGOING" },
  {
    _id: "4",
    yearlyGoalName: "Develop a new flagship product",
    status: "ONGOING",
  },
  {
    _id: "5",
    yearlyGoalName: "Improve customer retention rate",
    status: "ONGOING",
  },
  {
    _id: "6",
    yearlyGoalName: "Achieve 1M social media followers",
    status: "DONE",
  },
  {
    _id: "7",
    yearlyGoalName: "Enhance employee training programs",
    status: "ONGOING",
  },
  {
    _id: "8",
    yearlyGoalName: "Increase brand partnerships",
    status: "DONE",
  },
  {
    _id: "9",
    yearlyGoalName: "Reduce company expenses by 15%",
    status: "ONGOING",
  },
  {
    _id: "10",
    yearlyGoalName: "Improve ESG (Environmental, Social, Governance) practices",
    status: "DONE",
  },
  {
    _id: "11",
    yearlyGoalName: "Launch new AI-driven analytics tool",
    status: "ONGOING",
  },
];

// Sample Yearly History Logs
export const yearlyHistoryLogs: YearlyHistoryLogType[] = [
  { _id: "1", yearNum: "2015", status: "SUCCESS" },
  { _id: "2", yearNum: "2016", status: "SUCCESS" },
  { _id: "3", yearNum: "2017", status: "FAILED" },
  { _id: "4", yearNum: "2018", status: "SUCCESS" },
  { _id: "5", yearNum: "2019", status: "SUCCESS" },
  { _id: "6", yearNum: "2020", status: "FAILED" },
  { _id: "7", yearNum: "2021", status: "SUCCESS" },
  { _id: "8", yearNum: "2022", status: "SUCCESS" },
  { _id: "9", yearNum: "2023", status: "FAILED" },
  { _id: "10", yearNum: "2024", status: "SUCCESS" },
  { _id: "11", yearNum: "2025", status: "FAILED" },
  { _id: "12", yearNum: "2026", status: "SUCCESS" },
];

export const notes: notesTypes[] = [
  {
    id: "0",
    title: "Meeting Notes for today",
    content:
      "Discussed project timeline, assigned tasks, and set next meeting on Friday. Key takeaways: finalize UI designs by next week, ensure backend API integration is smooth, and review client feedback before proceeding further.",
    date: "4/4/2025, 5:14:30 PM",
  },
  {
    id: "1",
    title: "Shopping List for urgency",
    content:
      "Milk, eggs, bread, and fruits for the week. Remember to check for discounts on cereals and snacks. Also, look for organic vegetables and some healthy snacks like nuts or protein bars for quick bites during work.",
    date: "4/3/2025, 2:45:10 PM",
  },
  {
    id: "2",
    title: "Project Ideas",
    content:
      "Brainstormed ideas for the new mobile app: user-friendly design, offline support, and gamification elements. The main focus is on productivity tracking with a clean UI and personalized reminders. Consider integrating AI-driven recommendations for better engagement.",
    date: "4/2/2025, 10:30:00 AM",
  },
  {
    id: "3",
    title: "Daily Journal really want to meet",
    content:
      "Today was productive: finished reading a book, took a long walk, and cooked a healthy meal. Also, started learning a new programming concept, which seemed tough at first but got better with practice. Need to focus on consistency and time management.",
    date: "4/1/2025, 8:15:20 PM",
  },
  {
    id: "4",
    title: "Workout Plan",
    content:
      "Monday: Cardio and abs. Wednesday: Strength training. Friday: Yoga and stretching. Planning to add HIIT workouts on alternate days to improve endurance. Will track progress weekly and adjust exercises accordingly.",
    date: "3/31/2025, 6:45:50 AM",
  },
  {
    id: "5",
    title: "Travel Itinerary",
    content:
      "Plan to visit Paris next month: book flights, reserve hotel, and list must-see attractions. Planning to explore local cuisine, visit the Louvre, and take a day trip to Versailles. Need to sort out travel insurance and prepare a packing list for essentials.",
    date: "3/30/2025, 9:00:00 AM",
  },
];
