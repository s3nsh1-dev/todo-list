import React from "react";
import { Button } from "@mui/material";
import { historyPanelStyle } from "../../constants/customCssProperties";

interface propTypes {
  children: React.ReactNode;
  closingModal: () => void;
  panelTitle: string;
}

const HistoryCard: React.FC<propTypes> = ({
  children,
  closingModal,
  panelTitle,
}) => {
  return (
    <div className="history-card" style={historyPanelStyle}>
      <div className="history-content-wrap">
        <h1 className="history-title type-display-lg">{panelTitle}</h1>
        <div className="history-scroll">{children}</div>
      </div>
      <Button color="error" onClick={closingModal}>
        Close
      </Button>
    </div>
  );
};

export default HistoryCard;
