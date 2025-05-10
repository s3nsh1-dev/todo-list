import { RequestHandler, Request, Response } from "express";
import WeeklyTask from "../../model/weeklyTask.model";
import { weeklyGoalsListType } from "../../constants/projectTypes";

interface UpdatedRequestType extends Request {
  body: {
    _id: string;
  };
}

const updateWeeklyTaskStatus: RequestHandler = async (
  req: UpdatedRequestType,
  res: Response
) => {
  try {
    const { _id } = { ...req.body };
    if (!_id) {
      res.status(422).json({ error: "ID NOT FOUND" });
      return;
    }
    const result = await WeeklyTask.findOne({ _id });
    if (!result) {
      res.status(404).json({ error: "TASK NOT FOUND" });
      return;
    }
    result.wGoalsStatus = result.wGoalsStatus === "DONE" ? "ONGOING" : "DONE";
    const updated: weeklyGoalsListType = await result.save();
    if (!updated) {
      res.status(400).json({ error: "UPDATE NOT SAVED", body: updated });
      return;
    }
    res
      .status(200)
      .json({ success: "SUCCESS: TASK STATUS UPDATED", body: result });
  } catch (error) {
    res.status(500).json({ error: `SERVER ERROR: ${error}` });
  }
};
export default updateWeeklyTaskStatus;
