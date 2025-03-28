import { todayDate } from "../constants/GenericConstants";
import { Divider, IconButton } from "@mui/material";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";

const DailyTasks = () => {
  const dailyTasks = useSelector(
    (state: RootState) => state.dailyTasks.taskDetails
  );

  console.log(dailyTasks);
  return (
    <div style={{ margin: "0px 5%" }}>
      <section id="daily-title-bar" className="flex justify-between">
        <h1 className="flex items-center font-bold">{todayDate}</h1>
        <div>
          <IconButton aria-label="daily-tasks-history">
            <WorkHistoryIcon color="info" />
          </IconButton>
          <IconButton aria-label="edit-daily-tasks">
            <ModeEditIcon color="error" />
          </IconButton>
          <IconButton aria-label="add-more-tasks">
            <AddCircleOutlineIcon color="success" />
          </IconButton>
        </div>
      </section>
      <Divider />
      <section>
        <article id="daily-tasks-info" className="">
          <h1 className="font-bold text-2xl">Introduction:</h1>
          <p className="text-justify">
            Use the Daily Tasks feature to manage your to-dos effortlessly. Add
            a new task with a unique ID, update its name when needed, or remove
            it by its ID. The app automatically tracks your task outcomes
            (SUCCESS or FAILED) so you can review your daily performance.
          </p>
        </article>
        <article id="daily-tasks-list">
          <div id="completed-daily-task">
            <h1>Completed</h1>
            <div id="show-completed-tasks"></div>
          </div>
          <Divider />
          <div id="ongoing-daily-task">
            <h1>Ongoing</h1>
            <div id="show-ongoing-tasks"></div>
          </div>
        </article>
      </section>
    </div>
  );
};

export default DailyTasks;
