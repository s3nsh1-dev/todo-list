import express from "express";
import fetchWeeklyTasks from "../controller/weeklyTasks/fetchWeeklyTasks.controller";
import addWeeklyTask from "../controller/weeklyTasks/addWeeklyTask.controller";

const weeklyRouter = express.Router();

weeklyRouter.get("/", fetchWeeklyTasks);
weeklyRouter.post("/add", addWeeklyTask);

export default weeklyRouter;
