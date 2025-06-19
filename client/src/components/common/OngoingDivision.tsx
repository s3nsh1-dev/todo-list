import { useState } from "react";
import { DividerGray } from "../others/CommonComponents";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import ShowEditModal from "./ShowEditModal";
interface propTypes {
  id: string;
  name: string;
  index: number;
  arrLength: number;
  handleStatus: (value: string) => void;
  handleEditGoal: ({ _id, newName }: { _id: string; newName: string }) => void;
}
const OngoingDivision: React.FC<propTypes> = ({
  id,
  name,
  index,
  arrLength,
  handleStatus,
  handleEditGoal,
}) => {
  // const [updateWeeklyTaskName] = useUpdateWeeklyTaskNameMutation();
  const [open, setOpen] = useState<boolean>(false);
  const [userValue, setUserValue] = useState<string>("");
  const isDisabled = userValue.length > 0 ? false : true;
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const { listeners, transform, transition, attributes, setNodeRef } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    touchAction: "none",
  };
  const submitEditedTask = () => {
    handleEditGoal({ _id: id, newName: userValue });
    // updateWeeklyTaskName();
    // dispatch(updateTask({ ...tasks, taskName: userValue }));
    onClose();
  };
  return (
    <>
      <div className="flex justify-between" ref={setNodeRef} style={style}>
        <div className="flex items-center min-w-60 w-[50vw]">
          <IconButton {...listeners} {...attributes}>
            <DragIndicatorIcon sx={{ color: "white" }} />
          </IconButton>
          <p className="flex items-center ">{name}</p>
        </div>
        <div>
          <IconButton onClick={onOpen}>
            <EditIcon className="hover:text-blue-500 text-gray-500" />
          </IconButton>
          <IconButton
            onClick={() => {
              handleStatus(id);
            }}
          >
            <AddTaskIcon className="hover:text-green-700 text-gray-500" />
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
          placeholder={name}
        />
      )}
    </>
  );
};

export default OngoingDivision;
