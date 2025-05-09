import { RequestHandler, Request, Response } from "express";
import DailyTask from "../../model/dailyTask.model";

const deleteTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const { _id }: { _id: string } = { ...req.body };
    if (!_id) {
      console.log(_id);
      res.status(400).json({ message: "ID not found" });
      return;
    }
    const result = await DailyTask.deleteOne({ _id });
    if (result.deletedCount === 0) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.status(200).json({ message: "SUCCESS: TASK DELETED", body: result });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default deleteTask;
