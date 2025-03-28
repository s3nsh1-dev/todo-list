import { useSelector, useDispatch } from "react-redux";
import { Divider, IconButton } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import type { RootState } from "../../redux/store";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { DividerGray } from "../others/CommonComponents";

const DailyTaskManagement = () => {
  const dailyTasks = useSelector(
    (state: RootState) => state.dailyTasks.taskDetails
  );
  const dispatch = useDispatch();

  const renderOngoingTasks = dailyTasks.map((tasks) => {
    if (tasks.status === "ONGOING") {
      return (
        <div>
          <div key={tasks.taskId} className="flex items-center justify-between">
            <p className="flex item-center flex-row">{tasks.taskName}</p>
            <div>
              <IconButton>
                <ModeEditIcon className="text-gray-500 hover:text-white" />
              </IconButton>
              <IconButton>
                <TaskAltIcon className="text-gray-500 hover:text-green-700" />
              </IconButton>
            </div>
          </div>
          <DividerGray />
        </div>
      );
    }
  });

  return (
    <article id="daily-tasks-list">
      <div id="completed-daily-task">
        <h1>Completed</h1>
        <div id="show-completed-tasks">
          {dailyTasks.map((tasks) => {
            if (tasks.status === "DONE") {
              return <div key={tasks.taskId}>{tasks.taskName}</div>;
            }
          })}
        </div>
      </div>
      <Divider />
      <div id="ongoing-daily-task">
        <h1>Ongoing</h1>
        <div id="show-ongoing-tasks">{renderOngoingTasks}</div>
      </div>
    </article>
  );
};

export default DailyTaskManagement;
