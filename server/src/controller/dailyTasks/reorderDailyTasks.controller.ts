import { RequestHandler, Request, Response } from "express";
import DailyTask from "../../model/dailyTask.model";
import mongoose from "mongoose";

interface ReorderRequestBody extends Request {
  body: {
    orderedTasks: { _id: string; order: number }[];
  };
}

const reorderDailyTasks: RequestHandler = async (
  req: ReorderRequestBody,
  res: Response
): Promise<void> => {
  try {
    const { orderedTasks } = req.body;

    if (!orderedTasks || !Array.isArray(orderedTasks)) {
      res.status(422).json({ message: "Invalid or missing orderedTasks" });
      return;
    }

    const bulkOperations = orderedTasks.map((task) => ({
      updateOne: {
        filter: { _id: task._id },
        update: { $set: { order: task.order } },
      },
    }));

    const result = await DailyTask.bulkWrite(bulkOperations);

    res.status(200).json({ message: "SUCCESS: TASKS REORDERED", body: result });
  } catch (error: any) {
    if (error instanceof mongoose.Error.CastError) {
      res.status(400).json({ message: "Invalid taskId format" });
      return;
    }
    res
      .status(500)
      .json({ message: `SERVER ERROR: ${error.message || error}` });
  }
};

export default reorderDailyTasks;
