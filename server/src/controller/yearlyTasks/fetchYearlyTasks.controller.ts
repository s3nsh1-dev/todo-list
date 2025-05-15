import { RequestHandler, Request, Response } from "express";
import YearlyTask from "../../model/yearlyTask.model";

const fetchYearlyTasks: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const yearly = await YearlyTask.find({}).sort({ order: 1 });
    if (!yearly) {
      res.status(400).json({ error: "YEARLY COLLECTION NOT FOUND" });
      return;
    }
    res.status(200).json({ success: "WEEKLY TASKS FETCHED", body: yearly });
  } catch (error) {
    res.status(500).json({ error: `SERVER ERROR: ${error}` });
  }
};
export default fetchYearlyTasks;
