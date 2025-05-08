import express from "express";
const taskRoutes = express.Router();

taskRoutes.get("/", () => {});
taskRoutes.post("/add", () => {});

export default taskRoutes;
