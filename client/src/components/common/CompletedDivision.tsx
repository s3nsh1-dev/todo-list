import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { DividerGray } from "../others/CommonComponents";
import { useDispatch } from "react-redux";
import {
  removeWeeklyGoals,
  updateWeeklyGoalStatus,
} from "../../redux/slices/weeklyGoalsSlice";

interface propTypes {
  id: string;
  name: string;
  index: number;
  arrLength: number;
}

const CompletedDivision: React.FC<propTypes> = ({
  id,
  name,
  index,
  arrLength,
}) => {
  const dispatch = useDispatch();

  const handleStatusUpdate = (value: string) => {
    dispatch(updateWeeklyGoalStatus(value));
  };

  const handleDeleteGoal = (value: string) => {
    dispatch(removeWeeklyGoals(value));
  };

  return (
    <>
      <div className="flex justify-between">
        <p className="text-gray-500 flex items-center">{name}</p>
        <div>
          <IconButton
            onClick={() => {
              handleDeleteGoal(id);
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
