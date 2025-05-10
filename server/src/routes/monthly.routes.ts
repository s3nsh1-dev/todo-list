import express from "express";
import fetchMonthlyTasks from "../controller/monthlyTasks/fetchMonthlyTasks.controller";
import addMonthlyTask from "../controller/monthlyTasks/addMonthlyTasks.controller";
import updateMonthlyTaskName from "../controller/monthlyTasks/updateMonthlyTaskName.controller";
import updateMonthlyTaskStatus from "../controller/monthlyTasks/updateMonthlyTaskStatus.controller";
import deleteMonthlyTask from "../controller/monthlyTasks/deleteMonthlyTask.controller";

const monthlyRouter = express.Router();

monthlyRouter.get("/", fetchMonthlyTasks);
monthlyRouter.post("/add", addMonthlyTask);
monthlyRouter.delete("/delete", deleteMonthlyTask);
monthlyRouter.patch("/update/status", updateMonthlyTaskStatus);
monthlyRouter.patch("/update/name", updateMonthlyTaskName);

export default monthlyRouter;
