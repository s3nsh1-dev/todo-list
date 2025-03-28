import { FC } from "react";
import IconButton from "@mui/material/IconButton";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { DividerGray } from "../others/CommonComponents";
import type { taskDetailsType } from "../../constants/commonInterfaces";

interface propTypes {
  tasks: taskDetailsType;
  index: number;
  arrLength: number;
}

const ShowCompletedTasks: FC<propTypes> = ({ tasks, index, arrLength }) => {
  return (
    <>
      <div className="flex items-center justify-between">
        <p className="flex item-center flex-row">{tasks.taskName}</p>
        <div>
          <IconButton>
            <HighlightOffIcon className="text-gray-500 hover:text-red-700" />
          </IconButton>
        </div>
      </div>
      {index !== arrLength - 1 && <DividerGray />}
    </>
  );
};

export default ShowCompletedTasks;
