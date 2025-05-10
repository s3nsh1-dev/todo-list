import { RequestHandler, Response, Request } from "express";
import { monthlyGoalsListType } from "../../constants/projectTypes";
import MonthlyTask from "../../model/monthlyTask.model";

const addMonthlyTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result: monthlyGoalsListType = { ...req.body };
    if (!result || !result.GoalName || result.GoalName.trim() === "") {
      res.status(422).json({ message: "Some Properties Missing" });
      return;
    }
    const monthly: monthlyGoalsListType = await MonthlyTask.create(result);
    res.status(201).json({ message: "ADDED: MONTHLY TASKS", body: monthly });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default addMonthlyTask;
