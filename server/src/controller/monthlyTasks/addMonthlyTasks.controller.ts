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

    //find the highest order number
    const lastTask = await MonthlyTask.findOne({}).sort({ order: -1 }).limit(1);
    const newOrder = lastTask ? lastTask.order + 1 : 0;
    const task = await MonthlyTask.create({
      GoalName: result.GoalName,
      order: newOrder,
    });
    res.status(201).json({ message: "ADDED: MONTHLY TASKS", body: task });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default addMonthlyTask;
