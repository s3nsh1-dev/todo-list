import { FC, useMemo } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import type { historyLogType } from "../../../constants/commonInterfaces";
import ShowLatestHistory from "./ShowLatestHistory";
import HistoryCard from "../../week-month/common-wm/HistoryCard";

interface propTypes {
  closingModal: () => void;
}

const DailyTaskHistoryModal: FC<propTypes> = ({ closingModal }) => {
  // Memoize the selection logic
  const taskHistory: historyLogType[] = useSelector(
    (state: RootState) => state.dailyTasks.previousTasksLogs
  );

  const latestTasks: historyLogType[] = useMemo(() => {
    return [...taskHistory]
      .slice(-15) // Get the last 15 elements
      .reverse(); // Reverse the array
  }, [taskHistory]);

  const renderHistoryData = latestTasks.map((tasks, index) => {
    const color: string =
      tasks.histResult === "SUCCESS" ? "bg-green-800" : "bg-red-800";
    return (
      <ShowLatestHistory
        key={tasks.histId}
        primary={tasks.histDate}
        secondary={tasks.histResult}
        index={index}
        arrLength={latestTasks.length}
        color={color}
      />
    );
  });

  return (
    <HistoryCard closingModal={closingModal} panelTitle="Task History">
      {renderHistoryData}
    </HistoryCard>
  );
};

export default DailyTaskHistoryModal;
