import express from "express";
import cors from "cors";
import env from "./src/config/env.config";
import taskRoutes from "./src/routes/daily.routes";
import weeklyRouter from "./src/routes/weekly.routes";
import monthlyRouter from "./src/routes/monthly.routes";
import yearlyRouter from "./src/routes/yearly.routes";
import connectMongodb from "./src/config/mongodb.connect";

const app = express();
const listeningPort = env.PORT || 3000;

const startServer = async () => {
  try {
    //Middleware
    app.use(cors());
    app.use(express.json());

    //Database Connection
    await connectMongodb();

    //Routes
    app.use("/api/daily", taskRoutes);
    app.use("/api/weekly", weeklyRouter);
    app.use("/api/monthly", monthlyRouter);
    app.use("/api/yearly", yearlyRouter);

    // Root Route
    app.get("/", (req, res) => {
      res.send("HOME");
    });

    //Start server
    app.listen(listeningPort, () => {
      console.log(`listening at http://localhost:${listeningPort}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
    process.exit(1); // Exit the process with failure
  }
};
startServer();
