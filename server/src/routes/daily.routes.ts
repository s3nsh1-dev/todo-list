import express from "express";
import fetchDailyTasks from "../controller/dailyTasks/fetchDailyTasks.controller";

const taskRoutes = express.Router();

taskRoutes.get("/", fetchDailyTasks);
taskRoutes.post("/add", () => {});

export default taskRoutes;
