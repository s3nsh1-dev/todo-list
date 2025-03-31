import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import type { weeklyLogsType } from "../../constants/commonInterfaces";
import ShowLatestHistory from "../common/ShowLatestHistory";
import HistoryCard from "../common/HistoryCard";

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
    const color: string =
      goal.wResult === "SUCCESS" ? "bg-green-800" : "bg-red-800";
    return (
      <ShowLatestHistory
        key={goal.id}
        primary={`Week ${goal.weekNum}`}
        secondary={goal.wResult}
        color={color}
        index={index}
        arrLength={historyLogs.length}
      />
    );
  });

  return (
    <>
      {/* <HistoryCard closingModal={onClosingModal} children={renderHistoryData} /> */}
      {/* below is more correct way than above but both works fine */}
      <HistoryCard
        closingModal={onClosingModal}
        panelTitle="Weekly performance"
      >
        {renderHistoryData}
      </HistoryCard>
    </>
  );
};

export default ShowWeekHistoryModal;
