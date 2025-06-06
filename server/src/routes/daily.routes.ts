import express from "express";
import fetchDailyTasks from "../controller/dailyTasks/fetchDailyTasks.controller";
import addDailyTask from "../controller/dailyTasks/addDailyTask.controller";
import updateDailyTaskName from "../controller/dailyTasks/updateDailyName.controller";
import updateDailyTaskStatus from "../controller/dailyTasks/updateDailyStatus.controller";
import deleteTask from "../controller/dailyTasks/deleteDailyTask.controller";
import reorderDailyTasks from "../controller/dailyTasks/reorderDailyTasks.controller";

const taskRoutes = express.Router();

taskRoutes.get("/", fetchDailyTasks);
taskRoutes.post("/add", addDailyTask);
taskRoutes.delete("/delete", deleteTask);
taskRoutes.patch("/update/name", updateDailyTaskName);
taskRoutes.patch("/update/status", updateDailyTaskStatus);
taskRoutes.patch("/reorder", reorderDailyTasks);

export default taskRoutes;
