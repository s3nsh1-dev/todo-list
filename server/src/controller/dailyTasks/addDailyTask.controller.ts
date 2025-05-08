import { taskDetailsType } from "../../constants/projectTypes";
import { RequestHandler, Request, Response } from "express";
import DailyTask from "../../model/dailyTask.model";

const addDailyTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    let result: taskDetailsType = { ...req.body };
    // Validate taskName
    if (!result || !result.taskName || result.taskName.trim() === "") {
      res.status(422).json({ message: "Enter a valid Task Name" });
      return;
    }
    const task: taskDetailsType = await DailyTask.create(result);
    res.status(201).json({ message: "ADDED: DAILY TASK", body: task });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default addDailyTask;
