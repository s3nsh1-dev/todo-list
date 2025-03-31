import {
  getDayOfTheWeek,
  getMonthAsString,
} from "../constants/commonFunctions";
import WMheader from "../components/common/WMheader";
import { useState } from "react";
import { Modal, Button } from "@mui/material";
import { historyPanelStyle } from "../constants/customCssProperties";

interface openPropType {
  toggleHistory: boolean;
  toggleGoals: boolean;
}

const MonthlyGoals = () => {
  const [open, setOpen] = useState<openPropType>({
    toggleHistory: false,
    toggleGoals: false,
  });

  const dateInfo = `${getDayOfTheWeek()}, ${getMonthAsString()} ${new Date().getFullYear()}`;
  const toggleHistoryModal = () => {
    setOpen((prev) => ({ ...prev, toggleHistory: !prev.toggleHistory }));
  };
  const toggleMonthlyGoalsModal = () => {
    setOpen((prev) => ({ ...prev, toggleGoals: !prev.toggleGoals }));
  };

  return (
    <>
      <WMheader
        dateInfo={dateInfo}
        toggleHistory={toggleHistoryModal}
        toggleGoals={toggleMonthlyGoalsModal}
      />
      {open.toggleHistory && (
        <Modal
          open={open.toggleHistory}
          onClose={() => {
            setOpen((prev) => ({ ...prev, toggleHistory: false }));
          }}
        >
          <div className="bg-gray-800" style={historyPanelStyle}>
            <div>HI am monthly history content</div>
            <div>
              <Button
                color="error"
                onClick={() => {
                  setOpen((prev) => ({ ...prev, toggleHistory: false }));
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

export default MonthlyGoals;
