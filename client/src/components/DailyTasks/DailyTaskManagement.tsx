import { useSelector } from "react-redux";
import type { RootState } from "../../redux/store";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import ShowOngoingTasks from "./ShowOngoingTasks";
import ShowCompletedTasks from "./ShowCompletedTasks";

interface stateType {
  completedTasks: taskDetailsType[];
  ongoingTasks: taskDetailsType[];
}

const DailyTaskManagement = () => {
  const dailyTasksList = useSelector(
    (state: RootState) => state.dailyTasks.taskDetails
  );
  console.log("the daily tasks list", dailyTasksList);
  const taskName: stateType = {
    completedTasks: dailyTasksList.filter((tasks) => tasks.status === "DONE"),
    ongoingTasks: dailyTasksList.filter((tasks) => tasks.status === "ONGOING"),
  };

  const renderOngoingTasks = taskName.ongoingTasks.map((tasks, index) => {
    return (
      <ShowOngoingTasks
        key={tasks.taskId}
        tasks={tasks}
        index={index}
        arrLength={taskName.ongoingTasks.length}
      />
    );
  });

  const renderCompletedTasks = taskName.completedTasks.map((tasks, index) => {
    return (
      <ShowCompletedTasks
        key={tasks.taskId}
        tasks={tasks}
        index={index}
        arrLength={taskName.completedTasks.length}
      />
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
