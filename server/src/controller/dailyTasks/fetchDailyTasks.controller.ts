import { RequestHandler, Request, Response } from "express";
import DailyTask from "../../model/dailyTask.model";
import { taskDetailsType } from "../../constants/projectTypes";

const fetchDailyTasks: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result: taskDetailsType[] = await DailyTask.find({}).sort({
      order: 1,
    });
    if (!result) {
      res.status(400).json({ message: "Corrupted Data" });
      return;
    }
    res.status(200).json({ message: "FETCHED: DAILY TASKS", body: result });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default fetchDailyTasks;
