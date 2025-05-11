import { taskDetailsType } from "../../constants/projectTypes";
import { RequestHandler, Request, Response } from "express";
import DailyTask from "../../model/dailyTask.model";

const addDailyTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { taskName } = req.body;

    if (!taskName || taskName.trim() === "") {
      res.status(422).json({ message: "Enter a valid Task Name" });
      return;
    }

    // Find the highest order number
    const lastTask = await DailyTask.findOne({}).sort({ order: -1 }).limit(1);

    const newOrder = lastTask ? lastTask.order + 1 : 0;

    const task = await DailyTask.create({
      taskName,
      order: newOrder,
    });
    res.status(201).json({ message: "ADDED: DAILY TASK", body: task });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default addDailyTask;
