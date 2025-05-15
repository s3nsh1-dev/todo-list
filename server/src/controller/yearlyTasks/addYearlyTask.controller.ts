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

    //find the highest order
    const lastTask = await YearlyTask.findOne({}).sort({ order: -1 }).limit(1);

    const newOrder = lastTask ? lastTask.order + 1 : 0;

    const task = await YearlyTask.create({ yearlyGoalName, order: newOrder });
    if (!task) {
      res.status(400).json({ error: "CAN NOT ADD TASK" });
      return;
    }
    res.status(201).json({ success: "YEARLY TASK ADDED", body: task });
  } catch (error) {
    res.status(500).json({ error: `Server Error: ${error}` });
  }
};
export default addYearlyTask;
