import { RequestHandler, Request, Response } from "express";
import MonthlyTask from "../../model/monthlyTask.model";
import { monthlyGoalsListType } from "../../constants/projectTypes";

const updateMonthlyTaskStatus: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { _id }: { _id: string } = { ...req.body };
    if (!_id) {
      res.status(422).json("ID not found");
      return;
    }
    const result = await MonthlyTask.findOne({
      _id,
    });
    if (!result) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    result.status = result.status === "DONE" ? "ONGOING" : "DONE";
    const updatedMonthly: monthlyGoalsListType = await result.save();
    if (!updatedMonthly) {
      res.status(400).json({ message: "ERROR: status not saved" });
      return;
    }
    res
      .status(200)
      .json({ message: "SUCCESS: STATUS UPDATED", body: updatedMonthly });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default updateMonthlyTaskStatus;
