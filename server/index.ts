import express from "express";
import cors from "cors";
import taskRoutes from "./src/routes/task.routes";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const listeningPort = process.env.PORT || 3000;

console.log(process.env.PORT);

app.use(cors());
app.use(express.json());

app.use("/api/task", taskRoutes);

app.get("/", (req, res) => {
  res.send("change");
});

app.listen(listeningPort, () => {
  console.log(`listening at http://localhost:${listeningPort}`);
});
