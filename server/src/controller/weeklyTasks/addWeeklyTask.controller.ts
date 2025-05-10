import { RequestHandler, Request, Response } from "express";
import { weeklyGoalsListType } from "../../constants/projectTypes";
import WeeklyTask from "../../model/weeklyTask.model";

const addWeeklyTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result: weeklyGoalsListType = { ...req.body };
    if (result.wGoalsName !== "" || !result) {
      res.status(422).json({ message: `Properties Missing from input` });
      return;
    }
    const weekly: weeklyGoalsListType = await WeeklyTask.create(result);
    if (!weekly) {
      res
        .status(400)
        .json({ message: "Corrupt Data: something when wrong creating data" });
      return;
    }
    res.status(201).json({ message: "ADDED: WEEKLY TASK", body: weekly });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default addWeeklyTask;
