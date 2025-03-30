import { getDayOfTheWeek, getWeekNumber } from "../constants/commonFunctions";
import WMheader from "../components/week-month/common-wm/WMheader";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import { historyPanelStyle } from "../constants/customCssProperties";
import { Button } from "@mui/material";

const WeeklyGoals = () => {
  const [open, setOpen] = useState(false);
  const dateInfo = `${getDayOfTheWeek()}, ${getWeekNumber()}`;
  const toggleModal = () => {
    setOpen(!open);
  };
  return (
    <>
      <WMheader dateInfo={dateInfo} toggleModal={toggleModal} />
      {open && (
        <Modal open={open} onClose={toggleModal}>
          <div className="bg-gray-800" style={historyPanelStyle}>
            <div>HI am history content</div>
            <div>
              <Button color="error" onClick={toggleModal}>
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
