import express, { Request, RequestHandler, Response } from "express";
import { taskDetails, previousTasksLogs } from "../constants/projectData";
import { taskDetailsType } from "../constants/projectTypes";

export const getTasks: RequestHandler = (
  req: express.Request,
  res: express.Response
) => {
  res.json({ taskDetails, previousTasksLogs });
};

export const postTask: RequestHandler = (req: Request, res: Response) => {
  const { text } = req.body;
  if (!text) {
    res.status(400).json({ message: "No task Details received" });
    return;
  }
  const objStructure: taskDetailsType = {
    taskId: crypto.randomUUID(),
    taskName: text,
    status: "ONGOING",
  };
  taskDetails.push(objStructure);
  res.status(201).json(objStructure);
};
