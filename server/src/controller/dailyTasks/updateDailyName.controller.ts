import { RequestHandler, Request, Response } from "express";
import { taskDetailsType } from "../../constants/projectTypes";
import DailyTask from "../../model/dailyTask.model";

const updateDailyTaskName: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { taskId, newName }: { taskId: string; newName: string } = {
      ...req.body,
    };
    if (!taskId || !newName) {
      res.status(422).json({ message: "Id or Name not found" });
    }
    const result: taskDetailsType | null = await DailyTask.findOneAndUpdate(
      { taskId },
      { $set: { taskName: newName } },
      { new: true, runValidators: true }
    );
    if (!result) {
      res.status(404).json({ message: "Task Not found" });
      return;
    }
    res
      .status(200)
      .json({ message: "SUCCESS: Task Name Updated", body: result });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default updateDailyTaskName;
