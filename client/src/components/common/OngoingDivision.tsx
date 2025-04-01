import { DividerGray } from "../others/CommonComponents";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";

interface propTypes {
  name: string;
  index: number;
  arrLength: number;
}

const OngoingDivision: React.FC<propTypes> = ({ name, index, arrLength }) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-gray-500 flex items-center">{name}</p>
        <div>
          <IconButton>
            <EditIcon className="hover:text-blue-500 text-gray-500" />
          </IconButton>
          <IconButton>
            <AddTaskIcon className="hover:text-green-700 text-gray-500" />
          </IconButton>
        </div>
      </div>
      {index < arrLength - 1 && <DividerGray />}
    </>
  );
};

export default OngoingDivision;
