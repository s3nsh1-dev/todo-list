import { RequestHandler, Request, Response } from "express";
import { taskDetailsType } from "../../constants/projectTypes";
import DailyTask from "../../model/dailyTask.model";

const updateDailyTaskStatus: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { _id } = { ...req.body };
    if (!_id) {
      res.status(422).json({ message: "Id not found" });
      return;
    }
    /*
    const updated = await DailyTask.findOneAndUpdate(
      { _id },
      [
        {
          $set: {
            status: {
              $cond: [{ $eq: ["$status", "DONE"] }, "ONGOING", "DONE"],
            },
          },
        },
      ],
      { new: true }
    );
    */
    const newTask = await DailyTask.findOne({ _id });
    if (!newTask) {
      res.status(404).json({ message: `Task not found` });
      return;
    }
    newTask.status = newTask.status === "ONGOING" ? "DONE" : "ONGOING";
    const updatedTaskStatus: taskDetailsType = await newTask.save();
    if (!updatedTaskStatus) {
      res.status(400).json({ message: "Corrupted Data: something went wrong" });
      return;
    }
    res
      .status(201)
      .json({ message: "SUCCESS: Status Updated", body: updatedTaskStatus });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default updateDailyTaskStatus;
