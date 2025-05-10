import { RequestHandler, Request, Response } from "express";
import YearlyTask from "../../model/yearlyTask.model";

interface UpdatedRequestBody extends Request {
  body: {
    _id: string;
  };
}

const updateYearlyTaskStatus: RequestHandler = async (
  req: UpdatedRequestBody,
  res: Response
) => {
  try {
    const { _id } = { ...req.body };
    if (!_id) {
      res.status(422).json({ error: "ID NOT FOUND" });
    }
    const result = await YearlyTask.findOne({ _id });
    if (!result) {
      res.status(404).json({ error: "TASK NOT FOUND" });
      return;
    }
    result.status = result.status === "DONE" ? "ONGOING" : "DONE";
    const updated = await result.save();
    if (!updated) {
      res.status(400).json({ error: "STATUS NOT SAVED" });
      return;
    }
    res.status(200).json({ success: "SUCCESS: STATUS UPDATED", body: updated });
  } catch (error) {
    res.status(500).json({ error: `SERVER ERROR: ${error}` });
  }
};
export default updateYearlyTaskStatus;
