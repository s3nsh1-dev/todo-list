import { FC, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { DividerGray } from "../others/CommonComponents";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import {
  useUpdateDailyTaskNameMutation,
  useUpdateDailyTaskStatusMutation,
} from "../../redux/thunks/modelAPI/task/dailyTaskAPI";
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
  const [updateDailyTaskName] = useUpdateDailyTaskNameMutation();
  const [updateDailyTaskStatus] = useUpdateDailyTaskStatusMutation();
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: tasks._id,
  });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 999 : "auto",
    position: isDragging ? ("relative" as const) : ("static" as const),
    opacity: isDragging ? 0.5 : 1,
    touchAction: "none",
    cursor: "move",
    boxShadow: isDragging ? "0 4px 6px -1px rgb(0 0 0 / 0.1)" : "none",
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
  // const dispatch = useDispatch();
  const handleUpdateTaskStatus = () => {
    updateDailyTaskStatus(tasks._id);
    // dispatch(updateTask({ ...tasks, status: "DONE" }));
  };
  const submitEditedTask = () => {
    updateDailyTaskName({ _id: tasks._id, newName: userValue });
    // dispatch(updateTask({ ...tasks, taskName: userValue }));
    onClose();
  };

  return (
    <>
      <div
        className="flex items-center justify-between rounded-lg transition-all duration-200"
        style={style}
        ref={setNodeRef}
      >
        <div className="flex items-center min-w-60 w-[50vw] gap-2">
          <IconButton
            {...listeners}
            {...attributes}
            className="cursor-grab active:cursor-grabbing"
          >
            <DragIndicatorIcon sx={{ color: "gray" }} />
          </IconButton>
          <p className="flex items-center flex-row">{tasks.taskName}</p>
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
