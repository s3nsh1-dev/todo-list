import React from "react";
import IconButton from "@mui/material/IconButton";
import HistoryIcon from "@mui/icons-material/History";
import AddTaskIcon from "@mui/icons-material/AddTask";
import RedirectToHome from "../../others/RedirectToHome";

interface propTypes {
  dateInfo: string;
  toggleModal: () => void;
}
const WMheader: React.FC<propTypes> = ({ dateInfo, toggleModal }) => {
  return (
    <div className="flex justify-between">
      <p>{dateInfo}</p>
      <div>
        <RedirectToHome />
        <IconButton>
          <HistoryIcon color="error" onClick={toggleModal} />
        </IconButton>
        <IconButton>
          <AddTaskIcon color="success" />
        </IconButton>
      </div>
    </div>
  );
};

export default WMheader;
