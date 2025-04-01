import { DividerGray } from "../others/CommonComponents";
import { IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import AddTaskIcon from "@mui/icons-material/AddTask";
import { useDispatch } from "react-redux";
import {
  updateWeeklyGoalStatus,
  updateWeeklyGoalName,
} from "../../redux/slices/weeklyGoalsSlice";

interface propTypes {
  id: string;
  name: string;
  index: number;
  arrLength: number;
}

const OngoingDivision: React.FC<propTypes> = ({
  id,
  name,
  index,
  arrLength,
}) => {
  const dispatch = useDispatch();

  const handleEditWGoal = (value: { id: string; name: string }) => {
    dispatch(updateWeeklyGoalName(value));
  };
  const handelWStatus = (value: string) => {
    dispatch(updateWeeklyGoalStatus(value));
  };

  return (
    <>
      <div className="flex justify-between">
        <p className="text-gray-500 flex items-center">{name}</p>
        <div>
          <IconButton
            onClick={() => {
              handleEditWGoal({ id: id, name: name });
            }}
          >
            <EditIcon className="hover:text-blue-500 text-gray-500" />
          </IconButton>
          <IconButton
            onClick={() => {
              console.log("triggered");
              handelWStatus(id);
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
