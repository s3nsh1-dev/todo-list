import { FC, useMemo } from "react";
import Button from "@mui/material/Button";
import { historyPanelStyle } from "../../../constants/customCssProperties";
import { useSelector } from "react-redux";
import type { RootState } from "../../../redux/store";
import type { historyLogType } from "../../../constants/commonInterfaces";
import ShowLatestHistory from "./ShowLatestHistory";
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

  return (
    <div className="bg-gray-800" style={historyPanelStyle}>
      <div style={{ marginBottom: "50px" }}>
        <div style={{ marginBottom: "30px" }}>
          <h1
            className="font-bold text-3xl text-center"
            style={{ paddingBottom: "10px" }}
          >
            Tasks History
          </h1>
        </div>
        <div
          className="overflow-y-auto"
          style={{ padding: "0px 10px", maxHeight: "30vh" }}
        >
          {latestTasks.map((tasks, index) => {
            const color: string =
              tasks.histResult === "SUCCESS" ? "bg-green-800" : "bg-red-800";
            return (
              <ShowLatestHistory
                key={tasks.histId}
                tasks={tasks}
                index={index}
                arrLength={latestTasks.length}
                color={color}
              />
            );
          })}
        </div>
      </div>
      <Button color="error" onClick={closingModal}>
        CLOSE
      </Button>
    </div>
  );
};

export default DailyTaskHistoryModal;
