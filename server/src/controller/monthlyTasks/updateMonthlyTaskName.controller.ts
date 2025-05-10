import { RequestHandler, Request, Response } from "express";
import MonthlyTask from "../../model/monthlyTask.model";

interface UpdateMonthlyTaskNameRequest extends Request {
  body: {
    _id: string;
    newName: string;
  };
}

const updateMonthlyTaskName: RequestHandler = async (
  req: UpdateMonthlyTaskNameRequest,
  res: Response
) => {
  try {
    const { _id, newName } = { ...req.body };
    if (!_id || !newName) {
      res.status(422).json("Properties(Id or New Name): Not found");
      return;
    }
    const result = await MonthlyTask.findByIdAndUpdate(
      _id,
      { $set: { GoalName: newName } },
      { new: true, runValidators: true }
    );
    if (!result) {
      res.status(404).json({ message: "Task Not Found" });
      return;
    }
    res.status(200).json({ message: "SUCCESS: NAME UPDATED", body: result });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default updateMonthlyTaskName;
