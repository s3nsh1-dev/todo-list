import { RequestHandler, Request, Response } from "express";
import WeeklyTask from "../../model/weeklyTask.model";

const updateWeeklyTaskName = async (req: Request, res: Response) => {
  try {
    const { _id, newName }: { _id: string; newName: string } = { ...req.body };
    if (!_id || !newName) {
      res.status(422).json({
        error: "MISSING PROPERTIES: ID OR NEW_NAME",
        message: `${typeof _id} or ${typeof newName}`,
      });
      return;
    }
    const result = await WeeklyTask.findByIdAndUpdate(
      _id,
      { $set: { wGoalsName: newName } },
      { new: true, runValidators: true }
    );
    if (!result) {
      res.status(404).json({ error: "ERROR: TASK NOT FOUND" });
      return;
    }
    res.status(200).json({ success: "NEW_NAME UPDATED", body: result });
  } catch (error) {
    res.status(500).json({ error: `SERVER ERROR: ${error}` });
  }
};
export default updateWeeklyTaskName;
