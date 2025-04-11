import express from "express";
import cors from "cors";
import taskRoutes from "./src/routes/task.routes.js";

const app = express();
const listeningPort = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/task", taskRoutes);

app.get("/", (req, res) => {
  res.send("change");
});

app.listen(listeningPort, () => {
  console.log("listening at http://localhost:3000");
});
