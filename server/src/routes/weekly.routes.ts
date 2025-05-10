import express from "express";
import fetchWeeklyTasks from "../controller/weeklyTasks/fetchWeeklyTasks.controller";
import addWeeklyTask from "../controller/weeklyTasks/addWeeklyTask.controller";
import updateWeeklyTaskName from "../controller/weeklyTasks/updateWeeklyTaskName.controller";
import updateWeeklyTaskStatus from "../controller/weeklyTasks/updateWeeklyTaskStatus.controller";
import deleteWeeklyTask from "../controller/weeklyTasks/deleteWeeklyTask.controller";

const weeklyRouter = express.Router();

weeklyRouter.get("/", fetchWeeklyTasks);
weeklyRouter.post("/add", addWeeklyTask);
weeklyRouter.patch("/update/status", updateWeeklyTaskStatus);
weeklyRouter.post("/update/name", updateWeeklyTaskName);
weeklyRouter.delete("/delete", deleteWeeklyTask);

export default weeklyRouter;
