import React from "react";
import IconButton from "@mui/material/IconButton";
import HistoryIcon from "@mui/icons-material/History";
import AddTaskIcon from "@mui/icons-material/AddTask";
import RedirectToHome from "../others/RedirectToHome";

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
    <div className="mb-4 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
      <p className="text-sm font-semibold tracking-wide text-slate-600 sm:text-base">
        {dateInfo}
      </p>
      <div className="flex items-center gap-1">
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
