import HistoryIcon from "@mui/icons-material/History";
import AddTaskIcon from "@mui/icons-material/AddTask";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { todayDate } from "../../constants/GenericConstants";
import AddTaskModal from "./add-tasks/AddTaskModal";
import { useState } from "react";
import Modal from "@mui/material/Modal";

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
  const handleModalVisibility = () => {
    setOpen((prev: stateType) => {
      return { ...prev, addTask: !open.addTask };
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
          <IconButton aria-label="daily-tasks-history">
            <HistoryIcon color="error" />
          </IconButton>
          <IconButton
            aria-label="add-more-tasks"
            onClick={handleModalVisibility}
          >
            <AddTaskIcon color="success" />
          </IconButton>
        </div>
      </section>
      {open && (
        <Modal
          open={open.addTask}
          onClose={handleModalVisibility}
          disableEnforceFocus={false}
        >
          <AddTaskModal closingModal={handleModalVisibility} />
        </Modal>
      )}
    </>
  );
};

export default DailyTopHeader;
