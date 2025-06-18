import { DividerGray } from "../others/CommonComponents";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface propTypes {
  id: string;
  name: string;
  index: number;
  arrLength: number;
  handleStatus: (value: string) => void;
}

const OngoingDivision: React.FC<propTypes> = ({
  id,
  name,
  index,
  arrLength,
  handleStatus,
}) => {
  const handleEditGoal = () => {};
  const { listeners, transform, transition, attributes, setNodeRef } =
    useSortable({ id });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
    touchAction: "none",
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
          <IconButton
            onClick={() => {
              handleEditGoal({ id, name });
            }}
          >
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
    </>
  );
};

export default OngoingDivision;
