import { useState, FC } from "react";
import { Button } from "@mui/material";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import { addTasks } from "../../redux/slices/dailyTasksSlice";
import { useDispatch } from "react-redux";
import { DividerGray } from "../others/CommonComponents";
import { addPanelStyle } from "../../constants/customCssProperties";

interface propsTypes {
  closingModal: () => void;
}

const AddTaskModal: FC<propsTypes> = ({ closingModal }) => {
  const [userValue, setUserValue] = useState("");
  const dispatch = useDispatch();

  const newTask: taskDetailsType = {
    // useId() is also good but not stable
    taskId: crypto.randomUUID(),
    taskName: "",
    status: "ONGOING",
  };

  const isDisabled = userValue.length > 0 ? true : false;

  console.log("we are rendering");

  const handleSubmit = () => {
    newTask.taskName = userValue;
    dispatch(addTasks(newTask));
    handleClose();
  };
  const handleClose = () => {
    closingModal();
  };

  return (
    <>
      <div className="bg-gray-800" style={addPanelStyle}>
        <div id="add-dailyTaskName" className="text-gray-300">
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
              placeholder="e.g., Need to go shopping"
              onChange={(e) => setUserValue(e.target.value)}
            />
          </div>
        </div>
        <div
          id="add-dailyTask-actionButtons"
          className="flex justify-center item-center gap-3"
        >
          <Button color="error" variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="success"
            disabled={isDisabled}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default AddTaskModal;
