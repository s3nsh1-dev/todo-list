import { FC, useState } from "react";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { DividerGray } from "../others/CommonComponents";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import { useDispatch } from "react-redux";
import { updateTask } from "../../redux/slices/dailyTasksSlice";
import { addPanelStyle } from "../../constants/customCssProperties";
import { Button, IconButton, Modal } from "@mui/material";

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
            <article id="add-dailyTaskName" className="text-gray-300">
              <h1 className="text-center text-2xl font-bold ">Add New Task</h1>
              <DividerGray />
              <div style={{ marginTop: "20px" }}>
                <p className="font-bold">Task Name</p>
                <input
                  className="border border-gray-300 rounded-md p-2 w-full"
                  style={{ padding: "10px", margin: "5px 0px" }}
                  value={userValue}
                  type="text"
                  id="add-dailyTaskName"
                  placeholder={tasks.taskName}
                  onChange={(e) => setUserValue(e.target.value)}
                />
              </div>
            </article>
            <article>
              <div
                id="add-dailyTask-actionButtons"
                className="flex justify-center item-center gap-3"
              >
                <Button color="error" variant="contained" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  onClick={submitEditedTask}
                  variant="contained"
                  color="success"
                  disabled={isDisabled}
                >
                  SAVE
                </Button>
              </div>
            </article>
          </section>
        </Modal>
      )}
    </>
  );
};

export default ShowOngoingTasks;
