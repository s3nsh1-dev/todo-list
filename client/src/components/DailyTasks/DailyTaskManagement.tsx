import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import type { RootState } from "../../redux/store";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { DividerGray } from "../others/CommonComponents";
import type { taskDetailsType } from "../../constants/commonInterfaces";

interface stateType {
  completedTasks: taskDetailsType[];
  ongoingTasks: taskDetailsType[];
}

const DailyTaskManagement = () => {
  const dailyTasksList = useSelector(
    (state: RootState) => state.dailyTasks.taskDetails
  );
  const [taskName, setTaskName] = useState<stateType>({
    completedTasks: [],
    ongoingTasks: [],
  });

  useEffect(() => {
    setTaskName({
      completedTasks: dailyTasksList.filter((tasks) => tasks.status === "DONE"),
      ongoingTasks: dailyTasksList.filter(
        (tasks) => tasks.status === "ONGOING"
      ),
    });
  }, [dailyTasksList]);

  const renderOngoingTasks = taskName.ongoingTasks.map((tasks, index) => {
    return (
      <>
        <div key={tasks.taskId} className="flex items-center justify-between">
          <p className="flex item-center flex-row">{tasks.taskName}</p>
          <div>
            <IconButton>
              <ModeEditIcon className="text-gray-500 hover:text-white" />
            </IconButton>
            <IconButton>
              <TaskAltIcon className="text-gray-500 hover:text-green-600" />
            </IconButton>
          </div>
        </div>
        {index < taskName.ongoingTasks.length - 1 && <DividerGray />}
      </>
    );
  });

  const renderCompletedTasks = taskName.completedTasks.map((tasks, index) => {
    return (
      <>
        <div key={tasks.taskId} className="flex items-center justify-between">
          <p className="flex item-center flex-row">{tasks.taskName}</p>
          <div>
            <IconButton>
              <TaskAltIcon className="text-gray-500 hover:text-red-700" />
            </IconButton>
          </div>
        </div>
        {index !== taskName.completedTasks.length - 1 && <DividerGray />}
      </>
    );
  });

  return (
    <article id="daily-tasks-list" className="flex flex-col gap-5">
      <div id="completed-daily-task">
        <h1 className="text-xl font-bold text-gray-400">Completed</h1>
        <div id="show-completed-tasks" className="text-gray-500">
          {renderCompletedTasks}
        </div>
      </div>
      <div id="ongoing-daily-task">
        <h1 className="text-xl font-bold">Ongoing</h1>
        <div id="show-ongoing-tasks">{renderOngoingTasks}</div>
      </div>
    </article>
  );
};

export default DailyTaskManagement;
