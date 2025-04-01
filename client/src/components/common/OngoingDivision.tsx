import { DividerGray } from "../others/CommonComponents";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";

interface propTypes {
  id: string;
  name: string;
  index: number;
  arrLength: number;
  handleStatus: (value: string) => void;
  handleEditGoal: ({ id, name }: { id: string; name: string }) => void;
}

const OngoingDivision: React.FC<propTypes> = ({
  id,
  name,
  index,
  arrLength,
  handleEditGoal,
  handleStatus,
}) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-gray-500 flex items-center">{name}</p>
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
              console.log("triggered");
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
