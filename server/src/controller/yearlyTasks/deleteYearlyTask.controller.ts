import { RequestHandler, Request, Response } from "express";
import YearlyTask from "../../model/yearlyTask.model";

interface UpdatedRequestBodyType extends Request {
  body: {
    _id: string;
  };
}

const deleteYearlyTask: RequestHandler = async (
  req: UpdatedRequestBodyType,
  res: Response
) => {
  try {
    const { _id } = { ...req.body };
    if (!_id) {
      res.status(422).json({ error: "ID NOT FOUND" });
      return;
    }
    const result = await YearlyTask.deleteOne({ _id });
    if (result.deletedCount === 0) {
      res.status(404).json({ error: "TASK NOT FOUND" });
      return;
    }
    res.status(200).json({ success: "TASK DELETED", body: result });
  } catch (error) {
    res.status(500).json({ error: `SERVER ERROR: ${error}` });
  }
};
export default deleteYearlyTask;
