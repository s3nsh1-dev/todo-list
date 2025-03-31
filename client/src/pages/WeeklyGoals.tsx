import { getDayOfTheWeek, getWeekNumber } from "../constants/commonFunctions";
import WMheader from "../components/week-month/common-wm/WMheader";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { historyPanelStyle } from "../constants/customCssProperties";
import { Button } from "@mui/material";

interface openType {
  openHistory: boolean;
  openAddWeeklyGoals: boolean;
}

const WeeklyGoals = () => {
  const [open, setOpen] = useState<openType>({
    openHistory: false,
    openAddWeeklyGoals: false,
  });
  const dateInfo = `${getDayOfTheWeek()}, ${getWeekNumber()}`;
  const toggleHistoryModal = () => {
    setOpen((prev) => ({ ...prev, openHistory: !prev.openHistory }));
  };
  const toggleWeeklyModal = () => {
    setOpen((prev) => ({
      ...prev,
      openAddWeeklyGoals: !prev.openAddWeeklyGoals,
    }));
  };
  return (
    <>
      <WMheader
        dateInfo={dateInfo}
        toggleHistory={toggleHistoryModal}
        toggleGoals={toggleWeeklyModal}
      />
      {open && (
        <Modal open={open.openHistory} onClose={toggleHistoryModal}>
          <div className="bg-gray-800" style={historyPanelStyle}>
            <div>HI am weekly history content</div>
            <div>
              <Button
                color="error"
                onClick={() => {
                  setOpen((prev) => ({ ...prev, openHistory: false }));
                }}
              >
                Close
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default WeeklyGoals;
