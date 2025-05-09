import { YearlyGoalType } from "../../constants/projectTypes";
import { RequestHandler, Request, Response } from "express";
import YearlyTask from "../../model/yearlyTask.model";

const fetchYearlyTasks: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const yearly: YearlyGoalType[] = await YearlyTask.find({});
    if (!yearly) {
      res.status(400).json({ message: "Corrupted Data: something went wrong" });
      return;
    }
    res.status(200).json({ message: "FETCHED: WEEKLY TASKS", body: yearly });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default fetchYearlyTasks;
