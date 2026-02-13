import React from "react";
import IconButton from "@mui/material/IconButton";
import HistoryIcon from "@mui/icons-material/History";
import AddTaskIcon from "@mui/icons-material/AddTask";
import RedirectToHome from "../others/RedirectToHome";
import ThemeToggle from "./ThemeToggle";

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
    <div className="module-toolbar">
      <div>
        <p className="module-toolbar-eyebrow">Goals Dashboard</p>
        <h1 className="module-toolbar-title type-display-md">{dateInfo}</h1>
      </div>

      <div className="flex items-center gap-1">
        <ThemeToggle />
        <RedirectToHome />
        <IconButton onClick={toggleHistory}>
          <HistoryIcon sx={{ color: "#c84e4e" }} />
        </IconButton>
        <IconButton onClick={toggleGoals}>
          <AddTaskIcon sx={{ color: "#1f8f63" }} />
        </IconButton>
      </div>
    </div>
  );
};

export default WMheader;
