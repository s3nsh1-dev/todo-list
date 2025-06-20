import { RequestHandler, Request, Response } from "express";
import YearlyTask from "../../model/yearlyTask.model";
import mongoose from "mongoose";

interface ReorderRequestBody extends Request {
  body: {
    orderedTasks: { _id: string; order: number }[];
  };
}

const reorderYearlyTasks: RequestHandler = async (
  req: ReorderRequestBody,
  res: Response
): Promise<void> => {
  try {
    const { orderedTasks } = req.body;

    if (!orderedTasks || !Array.isArray(orderedTasks)) {
      res.status(422).json({ message: "Invalid or missing orderedTasks" });
      return;
    }

    // Update all tasks in a single operation
    const bulkOperations = orderedTasks.map(({ _id, order }) => ({
      updateOne: {
        filter: { _id },
        update: { $set: { order } },
      },
    }));

    await YearlyTask.bulkWrite(bulkOperations);

    // Fetch updated tasks to return the new order
    const updatedTasks = await YearlyTask.find({}).sort({ order: 1 });

    res.status(200).json({
      message: "SUCCESS: TASKS REORDERED",
      body: updatedTasks,
    });
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

export default reorderYearlyTasks;
