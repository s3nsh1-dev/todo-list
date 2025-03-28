import DailyIntro from "../components/DailyTasks/DailyIntro";
import { Divider } from "@mui/material";
import DailyTopHeader from "../components/DailyTasks/DailyTopHeader";
import DailyTaskManagement from "../components/DailyTasks/DailyTaskManagement";

const DailyTasks = () => {
  return (
    <div style={{ margin: "0px 5%" }}>
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
