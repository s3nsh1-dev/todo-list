import { RequestHandler, Request, Response } from "express";
import WeeklyTask from "../../model/weeklyTask.model";
import { weeklyGoalsListType } from "../../constants/projectTypes";

interface UpdatedWeeklyRequest extends Request {
  body: {
    _id: string;
    newName: string;
  };
}

const updateWeeklyTaskName = async (
  req: UpdatedWeeklyRequest,
  res: Response
) => {
  try {
    const { _id, newName } = { ...req.body };
    if (!_id || newName) {
      res
        .status(422)
        .json({ message: "ERROR: MISSING PROPERTIES(ID OR NEW_NAME)" });
      return;
    }
    const result = await WeeklyTask.findByIdAndUpdate(
      _id,
      { $set: { wGoalsName: newName } },
      { new: true, runValidators: true }
    );
    if (!result) {
      res.status(404).json({ message: "ERROR: TASK NOT FOUND" });
      return;
    }
    res
      .status(200)
      .json({ message: "SUCCESS: NEW_NAME UPDATED", body: result });
  } catch (error) {
    res.status(500).json({ message: `SERVER ERROR: ${error}` });
  }
};
export default updateWeeklyTaskName;
