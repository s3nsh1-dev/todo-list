import { RequestHandler, Request, Response } from "express";
import { taskDetailsType } from "../../constants/projectTypes";
import DailyTask from "../../model/dailyTask.model";

const updateDailyTaskStatus: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const id: string = req.body;
    if (!id) {
      res.status(404).json({ message: "Id not found" });
      return;
    }
    //edit this
    const daily = await DailyTask.findById({});

    if (!daily) {
      res.status(400).json({ message: "Corrupted Data: something went wrong" });
      return;
    }
    res.status(201).json({ message: "", body: daily });
  } catch (error) {
    res.status(500).json({ message: `Server Error: ${error}` });
  }
};
export default updateDailyTaskStatus;
