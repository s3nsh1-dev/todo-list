import { RequestHandler, Request, Response } from "express";
import MonthlyTask from "../../model/monthlyTask.model";

const deleteMonthlyTask: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { _id }: { _id: string } = { ...req.body };
    if (!_id) {
      res.status(422).json({ message: "Id not found" });
      return;
    }
    const result = await MonthlyTask.deleteOne({ _id });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "TASK NOT FOUND" });
    }
    res.status(200).json({ message: "SUCCESS: DELETED TASK", body: result });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default deleteMonthlyTask;
