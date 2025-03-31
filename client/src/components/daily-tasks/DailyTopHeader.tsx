import HistoryIcon from "@mui/icons-material/History";
import AddTaskIcon from "@mui/icons-material/AddTask";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { todayDate } from "../../constants/GenericConstants";
import AddTaskModal from "./AddTaskModal";
import { useState } from "react";
import Modal from "@mui/material/Modal";
import DailyTaskHistoryModal from "./DailyTaskHistoryModal";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}
interface stateType {
  history: boolean;
  addTask: boolean;
}
const DailyTopHeader = () => {
  const [open, setOpen] = useState<stateType>({
    history: false,
    addTask: false,
  });
  const showAddTasksModal = () => {
    setOpen((prev: stateType) => {
      return { ...prev, addTask: !open.addTask };
    });
  };

  const showHistoryModal = () => {
    setOpen((prev) => {
      return {
        ...prev,
        history: !open.history,
      };
    });
  };

  return (
    <>
      <section id="daily-title-bar" className="flex justify-between">
        <h1 className="flex items-center font-bold">{todayDate}</h1>
        <div>
          <Link to="/">
            <IconButton aria-label="edit-daily-tasks">
              <HomeIcon color="primary" />
            </IconButton>
          </Link>

          <IconButton
            aria-label="daily-tasks-history"
            onClick={showHistoryModal}
          >
            <HistoryIcon color="error" />
          </IconButton>
          <IconButton aria-label="add-more-tasks" onClick={showAddTasksModal}>
            <AddTaskIcon color="success" />
          </IconButton>
        </div>
      </section>
      {open.addTask && (
        <Modal
          open={open.addTask}
          onClose={showAddTasksModal}
          disableEnforceFocus={false}
        >
          <AddTaskModal closingModal={showAddTasksModal} />
        </Modal>
      )}
      {open.history && (
        <Modal
          open={open.history}
          onClose={showHistoryModal}
          disableEnforceFocus={false}
        >
          <DailyTaskHistoryModal closingModal={showHistoryModal} />
        </Modal>
      )}
    </>
  );
};

export default DailyTopHeader;
