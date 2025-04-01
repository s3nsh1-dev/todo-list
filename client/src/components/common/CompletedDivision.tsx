import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DividerGray } from "../others/CommonComponents";

interface propTypes {
  name: string;
  index: number;
  arrLength: number;
}

const CompletedDivision: React.FC<propTypes> = ({ name, index, arrLength }) => {
  return (
    <>
      <div className="flex justify-between">
        <p className="text-gray-500 flex items-center">{name}</p>
        <IconButton>
          <HighlightOffIcon className="hover:text-red-500 text-gray-500" />
        </IconButton>
      </div>
      {index !== arrLength - 1 && <DividerGray />}
    </>
  );
};

export default CompletedDivision;
