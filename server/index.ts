import express from "express";
import cors from "cors";
import env from "./src/config/env.config";
import taskRoutes from "./src/routes/daily.routes";
import weeklyRouter from "./src/routes/weekly.routes";
import monthlyRouter from "./src/routes/monthly.routes";
import yearlyRouter from "./src/routes/yearly.routes";

const app = express();
const listeningPort = env.PORT || 3000;

console.log(process.env.PORT);

app.use(cors());
app.use(express.json());

app.use("/api/daily", taskRoutes);
app.use("/api/weekly", weeklyRouter);
app.use("/api/monthly", monthlyRouter);
app.use("/api/yearly", yearlyRouter);

app.get("/", (req, res) => {
  res.send("HOME");
});

app.listen(listeningPort, () => {
  console.log(`listening at http://localhost:${listeningPort}`);
});
