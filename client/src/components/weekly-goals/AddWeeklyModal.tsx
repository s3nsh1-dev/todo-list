import React from "react";
import TaskCardActionButtons from "../common/TaskCardActionButtons";
import TaskCardLabelContent from "../common/TaskCardLabelContent";
import { addPanelStyle } from "../../constants/customCssProperties";
import { useAddWeeklyTaskMutation } from "../../redux/thunks/modelAPI/task/weeklyTaskAPI";

interface propsTypes {
  onClosingModal: () => void;
}

const AddWeeklyModal: React.FC<propsTypes> = ({ onClosingModal }) => {
  const [userValue, setUserValue] = React.useState<string>("");
  const [addWeeklyTask, { isLoading }] = useAddWeeklyTaskMutation();

  const normalizedValue = userValue.trim();
  const isDisabled = normalizedValue.length < 2 || isLoading;

  const handleAddWeeklyGoal = async () => {
    if (isDisabled) return;
    try {
      await addWeeklyTask(normalizedValue).unwrap();
      onClosingModal();
    } catch (error) {
      console.error("Failed to add weekly goal", error);
    }
  };

  return (
    <div className="task-modal-shell" style={addPanelStyle}>
      <TaskCardLabelContent
        heading="Add Weekly Goal"
        label="Goal Name"
        userValue={userValue}
        setUserValue={setUserValue}
        placeholder="e.g., Finish API integration"
      />
      <TaskCardActionButtons
        isDisabled={isDisabled}
        handleSubmit={handleAddWeeklyGoal}
        handleClose={onClosingModal}
        backLabel="Close"
        enterLabel={isLoading ? "Saving..." : "Submit"}
      />
    </div>
  );
};

export default AddWeeklyModal;
