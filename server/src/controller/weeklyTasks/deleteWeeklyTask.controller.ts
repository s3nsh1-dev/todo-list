import { RequestHandler, Request, Response } from "express";
import WeeklyTask from "../../model/weeklyTask.model";
import mongoose from "mongoose";

interface DeleteWeeklyTaskRequest extends Request {
  body: {
    _id: string;
  };
}

const deleteWeeklyTask: RequestHandler = async (
  req: DeleteWeeklyTaskRequest,
  res: Response
) => {
  try {
    const { _id } = { ...req.body };
    if (!_id) {
      res.status(422).json({ message: "ID NOT FOUND" });
      return;
    }
    const result = await WeeklyTask.deleteOne({ _id });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "FAILED: TASK NOT FOUND" });
      return;
    }
    res
      .status(200)
      .json({ message: "SUCCESS: WEEKLY TASK DELETED", body: result });
  } catch (error) {
    if (error instanceof mongoose.Error.CastError) {
      res.status(400).json({ message: "Invalid taskId format" });
      return;
    }
    res.status(500).json({ message: `SERVER ERROR: ${error}` });
  }
};
export default deleteWeeklyTask;
