import express from "express";
import { getTasks, postTask } from "../controller/task.controller.js";

const taskRoutes = express.Router();

taskRoutes.get("/", getTasks);
taskRoutes.post("/add", postTask);

export default taskRoutes;
