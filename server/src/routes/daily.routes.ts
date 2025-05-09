import express from "express";
import fetchDailyTasks from "../controller/dailyTasks/fetchDailyTasks.controller";
import addDailyTask from "../controller/dailyTasks/addDailyTask.controller";
import updateDailyTaskName from "../controller/dailyTasks/updateDailyName.controller";
import updateDailyTaskStatus from "../controller/dailyTasks/updateDailyStatus.controller";

const taskRoutes = express.Router();

taskRoutes.get("/", fetchDailyTasks);
taskRoutes.post("/add", addDailyTask);
taskRoutes.post("/update/name", updateDailyTaskName);
taskRoutes.patch("/update/status", updateDailyTaskStatus);

export default taskRoutes;
