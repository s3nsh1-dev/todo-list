import express from "express";
import fetchYearlyTasks from "../controller/yearlyTasks/fetchYearlyTasks.controller";
import addYearlyTask from "../controller/yearlyTasks/addYearlyTask.controller";

const yearlyRouter = express.Router();

yearlyRouter.get("/", fetchYearlyTasks);
yearlyRouter.post("/add", addYearlyTask);

export default yearlyRouter;
