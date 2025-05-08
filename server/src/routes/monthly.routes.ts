import express from "express";
import fetchMonthlyTasks from "../controller/monthlyTasks/fetchMonthlyTasks.controller";
import addMonthlyTask from "../controller/monthlyTasks/addMonthlyTasks.controller";

const monthlyRouter = express.Router();

monthlyRouter.get("/", fetchMonthlyTasks);
monthlyRouter.post("/add", addMonthlyTask);

export default monthlyRouter;
