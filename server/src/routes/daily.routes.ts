import express from "express";
import fetchDailyTasks from "../controller/dailyTasks/fetchDailyTasks.controller";
import addDailyTask from "../controller/dailyTasks/addDailyTask.controller";

const taskRoutes = express.Router();

taskRoutes.get("/", fetchDailyTasks);
taskRoutes.post("/add", addDailyTask);

export default taskRoutes;
