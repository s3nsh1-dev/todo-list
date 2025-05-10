import { RequestHandler, Request, Response } from "express";
import YearlyTask from "../../model/yearlyTask.model";

interface UpdateRequestBody extends Request {
  body: {
    _id: string;
    newName: string;
  };
}

const updateYearlyTaskName: RequestHandler = async (
  req: UpdateRequestBody,
  res: Response
) => {
  try {
    const { _id, newName } = { ...req.body };
    if (!_id || !newName) {
      res.status(422).json({ message: "PROPERTIES MISSING: ID OR NEW_NAME" });
      return;
    }
    const result = await YearlyTask.findOneAndUpdate(
      { _id },
      { $set: { yearlyGoalName: newName } },
      { new: true, runValidators: true }
    );
    if (!result) {
      res.status(400).json({ message: "FAILED: TASK NOT UPDATED" });
    }
    res
      .status(200)
      .json({ message: "SUCCESS: NEW_NAME UPDATED", body: result });
  } catch (error) {
    res.status(500).json({ message: `SERVER ERROR: ${error}` });
  }
};
export default updateYearlyTaskName;
