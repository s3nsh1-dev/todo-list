import React from "react";
import { historyPanelStyle } from "../../../constants/customCssProperties";
import { Button } from "@mui/material";

interface propsTypes {
  onClosingModal: () => void;
}

const ShowWeekHistoryModal: React.FC<propsTypes> = ({ onClosingModal }) => {
  return (
    <div className="bg-gray-800" style={historyPanelStyle}>
      <div>HI am weekly history content</div>
      <div>
        <Button color="error" onClick={onClosingModal}>
          Close
        </Button>
      </div>
    </div>
  );
};

export default ShowWeekHistoryModal;
