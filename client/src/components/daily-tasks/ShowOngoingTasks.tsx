import { FC, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { DividerGray } from "../others/CommonComponents";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/slices/dailyTasksSlice";
import IconButton from "@mui/material/IconButton";
import ShowEditModal from "../common/ShowEditModal";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface propTypes {
  index: number;
  tasks: taskDetailsType;
  arrLength: number;
}

const ShowOngoingTasks: FC<propTypes> = ({ tasks, index, arrLength }) => {
  const { listeners, transform, transition, attributes, setNodeRef } =
    useSortable({
      id: tasks.taskId,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    touchAction: "none",
  };

  const [open, setOpen] = useState(false);
  const [userValue, setUserValue] = useState("");
  const isDisabled = userValue.length > 0 ? false : true;
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const handleUpdateTaskStatus = () => {
    dispatch(updateTask({ ...tasks, status: "DONE" }));
  };
  const submitEditedTask = () => {
    dispatch(updateTask({ ...tasks, taskName: userValue }));
    onClose();
  };

  return (
    <>
      <div
        className="flex items-center justify-between"
        style={style}
        ref={setNodeRef}
      >
        <div className="flex items-center min-w-60 w-[50vw]">
          <IconButton {...listeners} {...attributes}>
            <DragIndicatorIcon sx={{ color: "gray" }} />
          </IconButton>
          <p className="flex item-center flex-row ">{tasks.taskName}</p>
        </div>
        <div>
          <IconButton onClick={onOpen}>
            <ModeEditIcon className="text-gray-500 hover:text-blue-600" />
          </IconButton>
          <IconButton onClick={handleUpdateTaskStatus}>
            <TaskAltIcon className="text-gray-500 hover:text-green-600" />
          </IconButton>
        </div>
      </div>

      {index < arrLength - 1 && <DividerGray />}
      {open && (
        <ShowEditModal
          isDisabled={isDisabled}
          submitEditedTask={submitEditedTask}
          userValue={userValue}
          setUserValue={setUserValue}
          open={open}
          onClose={onClose}
          placeholder={tasks.taskName}
        />
      )}
    </>
  );
};

export default ShowOngoingTasks;
