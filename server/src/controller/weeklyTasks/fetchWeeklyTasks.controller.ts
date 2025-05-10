import { RequestHandler, Response, Request } from "express";
import WeeklyTask from "../../model/weeklyTask.model";
import { weeklyGoalsListType } from "../../constants/projectTypes";

const fetchWeeklyTasks: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const weekly: weeklyGoalsListType[] = await WeeklyTask.find({});
    if (!weekly) {
      res.status(400).json({ error: "Corrupted Data, something went wrong" });
      return;
    }
    res.status(200).json({ success: "FETCHED: WEEKLY TASKS", body: weekly });
  } catch (error) {
    res.status(500).json({ error: `Server Error: ${error}` });
  }
};
export default fetchWeeklyTasks;
