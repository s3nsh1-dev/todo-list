import DailyIntro from "../components/daily-tasks/DailyIntro";
import { Divider } from "@mui/material";
import DailyTopHeader from "../components/daily-tasks/DailyTopHeader";
import DailyTaskManagement from "../components/daily-tasks/DailyTaskManagement";

const DailyTasks = () => {
  return (
    <div style={{ margin: "0px 3%" }}>
      <DailyTopHeader />
      <Divider />
      <section className="flex flex-col gap-5" style={{ marginTop: "10px" }}>
        <DailyIntro />
        <Divider />
        <DailyTaskManagement />
      </section>
    </div>
  );
};

export default DailyTasks;
