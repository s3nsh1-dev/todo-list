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
} from "./projectTypes";

export const weeklyLogs: weeklyLogsType[] = [
  { weekNum: "1", wResult: "SUCCESS" },
  { weekNum: "2", wResult: "FAILED" },
  { weekNum: "3", wResult: "SUCCESS" },
  { weekNum: "4", wResult: "FAILED" },
  { weekNum: "5", wResult: "SUCCESS" },
  { weekNum: "6", wResult: "SUCCESS" },
  { weekNum: "7", wResult: "FAILED" },
];

export const weeklyGoalsList: weeklyGoalsListType[] = [
  { wGoalsName: "Exercise 5 times a week", wGoalsStatus: "DONE", order: 0 },
  { wGoalsName: "Read 2 books", wGoalsStatus: "ONGOING", order: 1 },
  { wGoalsName: "Improve coding skills", wGoalsStatus: "DONE", order: 2 },
  { wGoalsName: "Meditate daily", wGoalsStatus: "ONGOING", order: 3 },
  { wGoalsName: "Eat healthy meals", wGoalsStatus: "DONE", order: 4 },
  {
    wGoalsName: "Complete a side project",
    wGoalsStatus: "ONGOING",
    order: 5,
  },
  { wGoalsName: "Limit social media usage", wGoalsStatus: "ONGOING", order: 6 },
];

export const taskDetails: taskDetailsType[] = [
  { taskName: "Complete project report", status: "ONGOING", order: 0 },
  { taskName: "Review pull requests", status: "ONGOING", order: 1 },
  { taskName: "Fix UI bugs in dashboard", status: "DONE", order: 2 },
  { taskName: "Plan team meeting agenda", status: "ONGOING", order: 3 },
  { taskName: "Write documentation for API", status: "DONE", order: 4 },
  { taskName: "Respond to client emails", status: "ONGOING", order: 5 },
  {
    taskName: "Refactor authentication module",
    status: "ONGOING",
    order: 6,
  },
  { taskName: "Test new feature deployment", status: "DONE", order: 7 },
  {
    taskName: "Update dependencies in package.json",
    status: "ONGOING",
    order: 8,
  },
  { taskName: "Optimize database queries", status: "DONE", order: 9 },
  {
    taskName: "Prepare slides for presentation",
    status: "ONGOING",
    order: 10,
  },
  { taskName: "Fix login validation issue", status: "ONGOING", order: 11 },
  { taskName: "Conduct code review for intern", status: "DONE", order: 12 },
  { taskName: "Schedule one-on-one meetings", status: "ONGOING", order: 13 },
  {
    taskName: "Draft blog post on React performance",
    status: "DONE",
    order: 14,
  },
];

export const previousTasksLogs: historyLogType[] = [
  { histDate: "Mon, Mar.24.2025", histResult: "SUCCESS" },
  { histDate: "Tue, Mar.25.2025", histResult: "SUCCESS" },
  { histDate: "Wed, Mar.26.2025", histResult: "FAILED" },
  { histDate: "Thu, Mar.27.2025", histResult: "SUCCESS" },
  { histDate: "Fri, Mar.28.2025", histResult: "FAILED" },
  { histDate: "Sat, Mar.29.2025", histResult: "SUCCESS" },
  { histDate: "Sun, Mar.30.2025", histResult: "FAILED" },
  { histDate: "Mon, Mar.31.2025", histResult: "SUCCESS" },
  { histDate: "Tue, Apr.01.2025", histResult: "FAILED" },
  { histDate: "Wed, Apr.02.2025", histResult: "SUCCESS" },
  { histDate: "Thu, Apr.03.2025", histResult: "FAILED" },
  { histDate: "Fri, Apr.04.2025", histResult: "SUCCESS" },
  { histDate: "Sat, Apr.05.2025", histResult: "SUCCESS" },
  { histDate: "Sun, Apr.06.2025", histResult: "FAILED" },
  { histDate: "Mon, Apr.07.2025", histResult: "SUCCESS" },
  { histDate: "Tue, Apr.08.2025", histResult: "SUCCESS" },
  { histDate: "Wed, Apr.09.2025", histResult: "FAILED" },
  { histDate: "Thu, Apr.10.2025", histResult: "SUCCESS" },
  { histDate: "Fri, Apr.11.2025", histResult: "FAILED" },
  { histDate: "Sat, Apr.12.2025", histResult: "SUCCESS" },
  { histDate: "Sun, Apr.13.2025", histResult: "FAILED" },
];

export const monthlyHistory: monthlyHistoryType[] = [
  { MonthlyName: "January 2025", status: "SUCCESS" },
  { MonthlyName: "February 2025", status: "FAILED" },
  { MonthlyName: "March 2025", status: "SUCCESS" },
  { MonthlyName: "April 2025", status: "FAILED" },
  { MonthlyName: "May 2025", status: "SUCCESS" },
];

export const monthlyGoalsList: monthlyGoalsListType[] = [
  { GoalName: "Increase monthly sales by 10%", status: "ONGOING", order: 0 },
  { GoalName: "Launch new marketing campaign", status: "DONE", order: 1 },
  {
    GoalName: "Improve customer support response time",
    status: "ONGOING",
    order: 2,
  },
  { GoalName: "Reduce operational costs", status: "ONGOING", order: 3 },
  { GoalName: "Expand into two new regions", status: "DONE", order: 4 },
  { GoalName: "Implement a new CRM system", status: "ONGOING", order: 5 },
  { GoalName: "Upgrade website performance", status: "ONGOING", order: 6 },
  { GoalName: "Enhance social media engagement", status: "DONE", order: 7 },
  {
    GoalName: "Train team on new sales strategies",
    status: "ONGOING",
    order: 8,
  },
];

export const yearlyGoalList: YearlyGoalType[] = [
  {
    yearlyGoalName: "Increase company revenue by 20%",
    status: "ONGOING",
    order: 0,
  },
  {
    yearlyGoalName: "Expand to international markets",
    status: "DONE",
    order: 1,
  },
  { yearlyGoalName: "Hire 50 new employees", status: "ONGOING", order: 2 },
  {
    yearlyGoalName: "Develop a new flagship product",
    status: "ONGOING",
    order: 3,
  },
  {
    yearlyGoalName: "Improve customer retention rate",
    status: "ONGOING",
    order: 4,
  },
  {
    yearlyGoalName: "Achieve 1M social media followers",
    status: "DONE",
    order: 5,
  },
  {
    yearlyGoalName: "Enhance employee training programs",
    status: "ONGOING",
    order: 6,
  },
  {
    yearlyGoalName: "Increase brand partnerships",
    status: "DONE",
    order: 7,
  },
  {
    yearlyGoalName: "Reduce company expenses by 15%",
    status: "ONGOING",
    order: 8,
  },
  {
    yearlyGoalName: "Improve ESG (Environmental, Social, Governance) practices",
    status: "DONE",
    order: 9,
  },
  {
    yearlyGoalName: "Launch new AI-driven analytics tool",
    status: "ONGOING",
    order: 10,
  },
];

export const yearlyHistoryLogs: YearlyHistoryLogType[] = [
  { yearNum: "2015", status: "SUCCESS" },
  { yearNum: "2016", status: "SUCCESS" },
  { yearNum: "2017", status: "FAILED" },
  { yearNum: "2018", status: "SUCCESS" },
  { yearNum: "2019", status: "SUCCESS" },
  { yearNum: "2020", status: "FAILED" },
  { yearNum: "2021", status: "SUCCESS" },
  { yearNum: "2022", status: "SUCCESS" },
  { yearNum: "2023", status: "FAILED" },
  { yearNum: "2024", status: "SUCCESS" },
  { yearNum: "2025", status: "FAILED" },
  { yearNum: "2026", status: "SUCCESS" },
];

export const notes: notesTypes[] = [
  {
    title: "Meeting Notes for today",
    content:
      "Discussed project timeline, assigned tasks, and set next meeting on Friday. Key takeaways: finalize UI designs by next week, ensure backend API integration is smooth, and review client feedback before proceeding further.",
    date: "4/4/2025, 5:14:30 PM",
  },
  {
    title: "Shopping List for urgency",
    content:
      "Milk, eggs, bread, and fruits for the week. Remember to check for discounts on cereals and snacks. Also, look for organic vegetables and some healthy snacks like nuts or protein bars for quick bites during work.",
    date: "4/3/2025, 2:45:10 PM",
  },
  {
    title: "Project Ideas",
    content:
      "Brainstormed ideas for the new mobile app: user-friendly design, offline support, and gamification elements. The main focus is on productivity tracking with a clean UI and personalized reminders. Consider integrating AI-driven recommendations for better engagement.",
    date: "4/2/2025, 10:30:00 AM",
  },
  {
    title: "Daily Journal really want to meet",
    content:
      "Today was productive: finished reading a book, took a long walk, and cooked a healthy meal. Also, started learning a new programming concept, which seemed tough at first but got better with practice. Need to focus on consistency and time management.",
    date: "4/1/2025, 8:15:20 PM",
  },
  {
    title: "Workout Plan",
    content:
      "Monday: Cardio and abs. Wednesday: Strength training. Friday: Yoga and stretching. Planning to add HIIT workouts on alternate days to improve endurance. Will track progress weekly and adjust exercises accordingly.",
    date: "3/31/2025, 6:45:50 AM",
  },
  {
    title: "Travel Itinerary",
    content:
      "Plan to visit Paris next month: book flights, reserve hotel, and list must-see attractions. Planning to explore local cuisine, visit the Louvre, and take a day trip to Versailles. Need to sort out travel insurance and prepare a packing list for essentials.",
    date: "3/30/2025, 9:00:00 AM",
  },
];
