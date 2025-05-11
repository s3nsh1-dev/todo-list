import { useState, FC } from "react";
import { addPanelStyle } from "../../constants/customCssProperties";
import TaskCardLabelContent from "../common/TaskCardLabelContent";
import TaskCardActionButtons from "../common/TaskCardActionButtons";
import { useAddDailyTaskMutation } from "../../redux/thunks/modelAPI/task/dailyTaskAPI";

interface propsTypes {
  closingModal: () => void;
}

const AddTaskModal: FC<propsTypes> = ({ closingModal }) => {
  const [addDailyTask] = useAddDailyTaskMutation();

  const [userValue, setUserValue] = useState("");

  const isDisabled = userValue.length > 0 ? false : true;

  const handleSubmit = () => {
    addDailyTask(userValue);
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
