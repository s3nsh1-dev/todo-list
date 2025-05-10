import { RequestHandler, Request, Response } from "express";
import YearlyTask from "../../model/yearlyTask.model";
import mongoose from "mongoose";

interface UpdateRequestBody extends Request {
  body: {
    _id: string;
    newName: string;
  };
}

const updateYearlyTaskName: RequestHandler = async (
  req: UpdateRequestBody,
  res: Response
): Promise<void> => {
  try {
    const { _id, newName } = req.body;

    // Validate input
    if (!_id || !newName || newName.trim() === "") {
      res.status(422).json({ message: "ID OR NEW_NAME MISSING" });
      return;
    }

    // Use findByIdAndUpdate instead of findOneAndUpdate
    const result = await YearlyTask.findByIdAndUpdate(
      _id,
      { yearlyGoalName: newName },
      { new: true, runValidators: true }
    );

    if (!result) {
      res.status(404).json({ message: "TASK NOT FOUND" });
      return;
    }

    res.status(200).json({ message: "SUCCESS: NAME UPDATED", body: result });
  } catch (error: any) {
    if (error instanceof mongoose.Error.CastError) {
      res.status(400).json({ message: "Invalid ID format" });
      return;
    }
    res
      .status(500)
      .json({ message: `SERVER ERROR: ${error.message || error}` });
  }
};

export default updateYearlyTaskName;
