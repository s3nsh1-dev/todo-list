import express from "express";
import fetchWeeklyTasks from "../controller/weeklyTasks/fetchWeeklyTasks.controller";
import addWeeklyTask from "../controller/weeklyTasks/addWeeklyTask.controller";
import updateWeeklyTaskName from "../controller/weeklyTasks/updateWeeklyTaskName.controller";
import updateWeeklyTaskStatus from "../controller/weeklyTasks/updateWeeklyTaskStatus.controller";
import deleteWeeklyTask from "../controller/weeklyTasks/deleteWeeklyTask.controller";
import reorderWeeklyTasks from "../controller/weeklyTasks/reorderWeeklyTasks.controller";

const weeklyRouter = express.Router();

weeklyRouter.get("/", fetchWeeklyTasks);
weeklyRouter.post("/add", addWeeklyTask);
weeklyRouter.delete("/delete", deleteWeeklyTask);
weeklyRouter.patch("/update/status", updateWeeklyTaskStatus);
weeklyRouter.patch("/update/name", updateWeeklyTaskName);
weeklyRouter.patch(".reorder", reorderWeeklyTasks);

export default weeklyRouter;
