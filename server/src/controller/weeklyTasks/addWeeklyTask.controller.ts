import { RequestHandler, Request, Response } from "express";
import { weeklyGoalsListType } from "../../constants/projectTypes";
import WeeklyTask from "../../model/weeklyTask.model";

const addWeeklyTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { wGoalsName }: { wGoalsName: string } = { ...req.body };
    if (wGoalsName === "" || !wGoalsName) {
      res.status(422).json({ error: `PROPERTIES MISSING: WEEKLY TASK NAME` });
      return;
    }
    const weekly: weeklyGoalsListType = await WeeklyTask.create({ wGoalsName });
    if (!weekly) {
      res.status(400).json({ error: "CAN NOT ADD TASK" });
      return;
    }
    res.status(201).json({ success: "WEEKLY TASK ADDED", body: weekly });
  } catch (error) {
    res.status(500).json({ error: `SERVER ERROR: ${error}` });
  }
};
export default addWeeklyTask;
