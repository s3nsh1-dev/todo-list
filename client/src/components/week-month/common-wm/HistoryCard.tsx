import React from "react";
import { Button } from "@mui/material";
import { historyPanelStyle } from "../../../constants/customCssProperties";

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
    <div className="bg-gray-800" style={historyPanelStyle}>
      <div style={{ marginBottom: "50px" }}>
        <div style={{ marginBottom: "30px" }}>
          <h1
            className="font-bold text-3xl text-center"
            style={{ paddingBottom: "10px" }}
          >
            {panelTitle}
          </h1>
        </div>
        <div
          className="overflow-y-auto"
          style={{ padding: "0px 10px", maxHeight: "30vh" }}
        >
          {children}
        </div>
      </div>
      <Button color="error" onClick={closingModal}>
        CLOSE
      </Button>
    </div>
  );
};

export default HistoryCard;
