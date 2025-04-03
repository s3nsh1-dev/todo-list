import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import type { YearlyHistoryLogType } from "../../constants/commonInterfaces";
import ShowLatestHistory from "../common/ShowLatestHistory";
import HistoryCard from "../common/HistoryCard";

interface propsTypes {
  onClosingModal: () => void;
}

const ShowYearlyHistoryModal: React.FC<propsTypes> = ({ onClosingModal }) => {
  const stateValue: YearlyHistoryLogType[] = useSelector(
    (state: RootState) => state.yearlyResolution.yearlyHistoryLogs
  );

  const historyLogs = React.useMemo(() => {
    return [...stateValue].slice(-15).reverse();
  }, [stateValue]);

  const renderHistoryData = historyLogs.map((goal, index) => {
    const color: string =
      goal.status === "SUCCESS" ? "bg-green-800" : "bg-red-800";
    return (
      <ShowLatestHistory
        key={goal.id}
        primary={`${goal.yearNum}`}
        secondary={goal.status}
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
      <HistoryCard closingModal={onClosingModal} panelTitle="Yearly Logs">
        {renderHistoryData}
      </HistoryCard>
    </>
  );
};

export default ShowYearlyHistoryModal;
