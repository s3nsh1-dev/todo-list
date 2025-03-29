import { FC } from "react";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { DividerGray } from "../others/CommonComponents";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/slices/dailyTasksSlice";

interface propTypes {
  index: number;
  tasks: taskDetailsType;
  arrLength: number;
}

const ShowOngoingTasks: FC<propTypes> = ({ tasks, index, arrLength }) => {
  const dispatch = useDispatch();
  const handleUpdateTaskStatus = () => {
    dispatch(updateTask({ ...tasks, status: "DONE" }));
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="flex item-center flex-row">{tasks.taskName}</p>
        <div>
          <IconButton>
            <ModeEditIcon className="text-gray-500 hover:text-white" />
          </IconButton>
          <IconButton onClick={handleUpdateTaskStatus}>
            <TaskAltIcon className="text-gray-500 hover:text-green-600" />
          </IconButton>
        </div>
      </div>
      {index < arrLength - 1 && <DividerGray />}
    </>
  );
};

export default ShowOngoingTasks;
