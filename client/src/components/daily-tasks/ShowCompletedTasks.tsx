import { FC } from "react";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DividerGray } from "../others/CommonComponents";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import { useDispatch } from "react-redux";
// import { updateTask } from "../../redux/slices/model/dailyTasksSlice";
import {
  useUpdateDailyTaskStatusMutation,
  useDeleteDailyTaskMutation,
} from "../../redux/thunks/modelAPI/task/dailyTaskAPI";
interface propTypes {
  tasks: taskDetailsType;
  index: number;
  arrLength: number;
}

const ShowCompletedTasks: FC<propTypes> = ({ tasks, index, arrLength }) => {
  // const dispatch = useDispatch();
  const [updateDailyTaskName] = useUpdateDailyTaskStatusMutation();
  const [deleteDailyTask] = useDeleteDailyTaskMutation();
  const handleResetTaskStatus = () => {
    // dispatch(updateTask({ ...tasks, status: "ONGOING" }));
    updateDailyTaskName(tasks._id);
  };
  const removeCompletedTask = () => {
    deleteDailyTask(tasks._id);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="flex item-center flex-row min-w-64 w-[50vw]">
          {tasks.taskName}
        </p>
        <div>
          <IconButton onClick={removeCompletedTask}>
            <DeleteOutlineIcon className="text-gray-500 hover:text-red-700" />
          </IconButton>
          <IconButton onClick={handleResetTaskStatus}>
            <HighlightOffIcon className="text-gray-500 hover:text-red-700" />
          </IconButton>
        </div>
      </div>
      {index !== arrLength - 1 && <DividerGray />}
    </>
  );
};

export default ShowCompletedTasks;
