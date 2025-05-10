import { RequestHandler, Response, Request } from "express";
import YearlyTask from "../../model/yearlyTask.model";

interface UpdatedRequestBody extends Request {
  body: {
    yearlyGoalName: string;
  };
}

const addYearlyTask: RequestHandler = async (
  req: UpdatedRequestBody,
  res: Response
) => {
  try {
    const { yearlyGoalName } = { ...req.body };
    if (yearlyGoalName === "" || !yearlyGoalName) {
      res.status(422).json({ error: "TASK NAME MISSING" });
      return;
    }
    const yearly = await YearlyTask.create({ yearlyGoalName });
    if (!yearly) {
      res.status(400).json({ error: "CAN NOT ADD TASK" });
      return;
    }
    res.status(201).json({ success: "YEARLY TASK ADDED", body: yearly });
  } catch (error) {
    res.status(500).json({ error: `Server Error: ${error}` });
  }
};
export default addYearlyTask;
