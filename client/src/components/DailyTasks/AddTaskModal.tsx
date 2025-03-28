import { useId, useState } from "react";
import { Button } from "@mui/material";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import { addTasks } from "../../redux/slices/dailyTasksSlice";
import { useDispatch } from "react-redux";

const AddTaskModal = () => {
  const [userValue, setUserValue] = useState("");
  const dispatch = useDispatch();

  const newTask: taskDetailsType = {
    //crypto.randomUUID() is also good and stable
    taskId: useId(),
    taskName: "",
    status: "ONGOING",
  };

  const handleSubmit = () => {
    console.log("the newly added task", newTask);
    newTask.taskName = userValue;
    dispatch(addTasks(newTask));
  };

  return (
    <div>
      <div id="add-dailyTaskName">
        <label htmlFor="add-dailyTaskName">Task Name</label>
        <input
          value={userValue}
          type="text"
          id="add-dailyTaskName"
          placeholder="e.g., Need to go shopping"
          onChange={(e) => setUserValue(e.target.value)}
        />
      </div>
      <div id="add-dailyTask-actionButtons">
        <Button>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </div>
    </div>
  );
};

export default AddTaskModal;
