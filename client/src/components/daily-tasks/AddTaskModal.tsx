import { useState, FC } from "react";
import type { taskDetailsType } from "../../constants/commonInterfaces";
import { addTasks } from "../../redux/slices/dailyTasksSlice";
import { useDispatch } from "react-redux";
import { addPanelStyle } from "../../constants/customCssProperties";
import TaskCardLabelContent from "../common/TaskCardLabelContent";
import TaskCardActionButtons from "../common/TaskCardActionButtons";

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

  const isDisabled = userValue.length > 0 ? false : true;

  const handleSubmit = () => {
    newTask.taskName = userValue;
    dispatch(addTasks(newTask));
    closingModal();
  };

  return (
    <div className="bg-gray-800" style={addPanelStyle}>
      <TaskCardLabelContent
        userValue={userValue}
        setUserValue={setUserValue}
        heading="Add Task"
        label="Task Name"
        placeholder="e.g., Need to go shopping"
      />
      <TaskCardActionButtons
        isDisabled={isDisabled}
        handleSubmit={handleSubmit}
        handleClose={closingModal}
        backLabel="Cancel"
        enterLabel="Submit"
      />
    </div>
  );
};

export default AddTaskModal;
