import { FC, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { DividerGray } from "../others/CommonComponents";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/slices/dailyTasksSlice";
import { addPanelStyle } from "../../constants/customCssProperties";
import { IconButton, Modal } from "@mui/material";
import TaskCardActionButtons from "./add-tasks/TaskCardActionButtons";
import TaskCardLabelContent from "./add-tasks/TaskCardLabelContent";

interface propTypes {
  index: number;
  tasks: taskDetailsType;
  arrLength: number;
}

const ShowOngoingTasks: FC<propTypes> = ({ tasks, index, arrLength }) => {
  const [open, setOpen] = useState(false);
  const [userValue, setUserValue] = useState("");
  const isDisabled = userValue.length > 0 ? false : true;
  const onClose = () => {
    setOpen(false);
  };
  const onOpen = () => {
    setOpen(true);
  };
  const dispatch = useDispatch();
  const handleUpdateTaskStatus = () => {
    dispatch(updateTask({ ...tasks, status: "DONE" }));
  };
  const submitEditedTask = () => {
    dispatch(updateTask({ ...tasks, taskName: userValue }));
    onClose();
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <p className="flex item-center flex-row">{tasks.taskName}</p>
        <div>
          <IconButton onClick={onOpen}>
            <ModeEditIcon className="text-gray-500 hover:text-white" />
          </IconButton>
          <IconButton onClick={handleUpdateTaskStatus}>
            <TaskAltIcon className="text-gray-500 hover:text-green-600" />
          </IconButton>
        </div>
      </div>
      {index < arrLength - 1 && <DividerGray />}
      {open && (
        <Modal open={open} onClose={onClose}>
          <section className="bg-gray-800" style={addPanelStyle}>
            <TaskCardLabelContent
              userValue={userValue}
              setUserValue={setUserValue}
              heading="Edit Task"
              label="Task Name"
            />
            <article>
              <TaskCardActionButtons
                isDisabled={isDisabled}
                handleSubmit={submitEditedTask}
                handleClose={onClose}
                backLabel="Cancel"
                enterLabel="Save"
              />
            </article>
          </section>
        </Modal>
      )}
    </>
  );
};

export default ShowOngoingTasks;
