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
import ThemeToggle from "../common/ThemeToggle";

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
      <section id="daily-title-bar" className="module-toolbar">
        <div>
          <p className="module-toolbar-eyebrow">Daily Tasks</p>
          <h1 className="module-toolbar-title">{todayDate}</h1>
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <Link to="/">
            <IconButton aria-label="edit-daily-tasks">
              <HomeIcon sx={{ color: "var(--accent)" }} />
            </IconButton>
          </Link>

          <IconButton aria-label="daily-tasks-history" onClick={showHistoryModal}>
            <HistoryIcon sx={{ color: "#c84e4e" }} />
          </IconButton>

          <IconButton aria-label="add-more-tasks" onClick={showAddTasksModal}>
            <AddTaskIcon sx={{ color: "#1f8f63" }} />
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
