import { RequestHandler, Request, Response } from "express";
import MonthlyTask from "../../model/monthlyTask.model";
import { monthlyGoalsListType } from "../../constants/projectTypes";

const fetchMonthlyTasks: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const monthly: monthlyGoalsListType[] = await MonthlyTask.find({});
    if (!monthly) {
      res.status(404).json({ message: "COLLECTION not found" });
      return;
    }
    res.status(200).json({ message: "FETCHED: MONTHLY TASKS", body: monthly });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default fetchMonthlyTasks;
