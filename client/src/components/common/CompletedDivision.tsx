import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DividerGray } from "../others/CommonComponents";

interface propTypes {
  id: string;
  name: string;
  index: number;
  arrLength: number;
  handleDelete: (value: string) => void;
  handleStatusUpdate: (value: string) => void;
}

const CompletedDivision: React.FC<propTypes> = ({
  id,
  name,
  index,
  arrLength,
  handleDelete,
  handleStatusUpdate,
}) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-gray-500 flex items-center w-64">{name}</p>
        <div>
          <IconButton
            onClick={() => {
              handleDelete(id);
            }}
          >
            <DeleteOutlineIcon className="hover:text-red-500 text-gray-500" />
          </IconButton>
          <IconButton
            onClick={() => {
              handleStatusUpdate(id);
            }}
          >
            <HighlightOffIcon className="hover:text-red-500 text-gray-500" />
          </IconButton>
        </div>
      </div>
      {index !== arrLength - 1 && <DividerGray />}
    </>
  );
};

export default CompletedDivision;
