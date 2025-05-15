import express from "express";
import fetchYearlyTasks from "../controller/yearlyTasks/fetchYearlyTasks.controller";
import addYearlyTask from "../controller/yearlyTasks/addYearlyTask.controller";
import updateYearlyTaskName from "../controller/yearlyTasks/updateYearlyTaskName.controller";
import updateYearlyTaskStatus from "../controller/yearlyTasks/updateYearlyTaskStatus.controller";
import deleteYearlyTask from "../controller/yearlyTasks/deleteYearlyTask.controller";
import reorderYearlyTasks from "../controller/yearlyTasks/reorderYearlyTasks.controller";

const yearlyRouter = express.Router();

yearlyRouter.get("/", fetchYearlyTasks);
yearlyRouter.post("/add", addYearlyTask);
yearlyRouter.delete("/delete", deleteYearlyTask);
yearlyRouter.patch("/update/status", updateYearlyTaskStatus);
yearlyRouter.patch("/update/name", updateYearlyTaskName);
yearlyRouter.patch("/reorder", reorderYearlyTasks);

export default yearlyRouter;
