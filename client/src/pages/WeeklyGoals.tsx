import { getDayOfTheWeek, getWeekNumber } from "../constants/commonFunctions";
import WMheader from "../components/week-month/common-wm/WMheader";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import ShowWeekHistoryModal from "../components/weekly-goals/header-modals/ShowWeekHistoryModal";
import AddWeeklyModal from "../components/weekly-goals/header-modals/AddWeeklyModal";

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
  const toggleWeeklyGoalsModal = () => {
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
        toggleGoals={toggleWeeklyGoalsModal}
      />
      {open.openHistory && (
        <Modal
          open={open.openHistory}
          onClose={toggleHistoryModal}
          disableEnforceFocus={false}
        >
          <ShowWeekHistoryModal onClosingModal={toggleHistoryModal} />
        </Modal>
      )}
      {open.openAddWeeklyGoals && (
        <Modal
          open={open.openAddWeeklyGoals}
          onClose={toggleWeeklyGoalsModal}
          disableEnforceFocus={false}
        >
          <AddWeeklyModal onClosingModal={toggleWeeklyGoalsModal} />
        </Modal>
      )}
    </>
  );
};

export default WeeklyGoals;

/**
 * ISSUE:
 * when i declared userValue inside this component it did not reset but the value input i had previously was showing
 * so, the question i why did the userValue reset, i always though this was the normal behavior but why
 * it should reset and what i current component was not making it. coz there was nothing wrong it should not reset
 * based on the coded behavior(i forgot this behavior)
 *
 * ANSWER:
 * state (the placement of state had the whole game)
 * state get destroyed when its unmounted and reset the value to the default when its mounted
 * userValue was never getting unmounted as i declared it in the header main weekly component which was active
 * active will i moved to another tab or close the page.
 * in daily task i made the {children} of modal its separate component leading the reset of useValue when i am done with the edit
 * in short, isolating the modal content into its own component causes it to reset its internal state on each mount/unmount cycle, which is why  userInput now clears when you reopen the modal.
 *
 */
