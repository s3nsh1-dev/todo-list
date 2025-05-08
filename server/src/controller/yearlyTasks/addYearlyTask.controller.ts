import { RequestHandler, Response, Request } from "express";
import { YearlyGoalType } from "../../constants/projectTypes";
import YearlyTask from "../../model/yearlyTask.model";

const addYearlyTask: RequestHandler = async (req: Request, res: Response) => {
  try {
    const result: YearlyGoalType = { ...req.body };
    if (result.yearlyGoalName === "" || result.id === "" || !result) {
      res.status(422).json({ message: "Data have missing properties" });
      return;
    }
    const yearly: YearlyGoalType = await YearlyTask.create(result);
    if (!yearly) {
      res.status(400).json({ message: "Corrupt Data: something went wrong" });
      return;
    }
    res.status(201).json({ message: "ADDED: YEARLY TASK", body: yearly });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default addYearlyTask;
