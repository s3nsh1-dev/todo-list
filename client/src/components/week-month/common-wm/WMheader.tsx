import React from "react";
import IconButton from "@mui/material/IconButton";
import HistoryIcon from "@mui/icons-material/History";
import AddTaskIcon from "@mui/icons-material/AddTask";
import RedirectToHome from "../../others/RedirectToHome";

interface propTypes {
  dateInfo: string;
  toggleHistory: () => void;
  toggleGoals: () => void;
}
const WMheader: React.FC<propTypes> = ({
  dateInfo,
  toggleGoals,
  toggleHistory,
}) => {
  return (
    <div className="flex justify-between">
      <p>{dateInfo}</p>
      <div>
        <RedirectToHome />
        <IconButton onClick={toggleHistory}>
          <HistoryIcon color="error" />
        </IconButton>
        <IconButton onClick={toggleGoals}>
          <AddTaskIcon color="success" />
        </IconButton>
      </div>
    </div>
  );
};

export default WMheader;
