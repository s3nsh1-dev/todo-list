import React from "react";
import { historyPanelStyle } from "../../../constants/customCssProperties";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import type { weeklyLogsType } from "../../../constants/commonInterfaces";
import { DividerGray } from "../../others/CommonComponents";

interface propsTypes {
  onClosingModal: () => void;
}

const ShowWeekHistoryModal: React.FC<propsTypes> = ({ onClosingModal }) => {
  const stateValue: weeklyLogsType[] = useSelector(
    (state: RootState) => state.weeklyGoals.weeklyLogs
  );

  const historyLogs = React.useMemo(() => {
    return [...stateValue].slice(-15).reverse();
  }, [stateValue]);

  const renderHistoryData = historyLogs.map((goal, index) => {
    const color = goal.wResult === "SUCCESS" ? "bg-green-700" : "bg-red-700";
    return (
      <div key={goal.id} className="" style={{ margin: "10px 0px" }}>
        <div className="flex justify-between" style={{ margin: "5px 0px" }}>
          <p className="font-bold">Week {goal.weekNum}</p>
          <div className={`${color} w-20 flex justify-center rounded`}>
            {goal.wResult}
          </div>
        </div>
        {index !== historyLogs.length - 1 && <DividerGray />}
      </div>
    );
  });

  return (
    <div className="bg-gray-800" style={historyPanelStyle}>
      <div style={{ marginBottom: "50px" }}>
        <div style={{ marginBottom: "30px" }}>
          <h1
            className="font-bold text-3xl text-center"
            style={{ paddingBottom: "10px" }}
          >
            Weekly Stats
          </h1>
        </div>
        <div
          className="overflow-y-auto"
          style={{ padding: "0px 10px", maxHeight: "30vh" }}
        >
          {renderHistoryData}
        </div>
      </div>
      <Button color="error" onClick={onClosingModal}>
        CLOSE
      </Button>
    </div>
  );
};

export default ShowWeekHistoryModal;
