import React from "react";
import TaskCardActionButtons from "../common/TaskCardActionButtons";
import TaskCardLabelContent from "../common/TaskCardLabelContent";
import { addPanelStyle } from "../../constants/customCssProperties";
import { useAddYearlyTaskMutation } from "../../redux/thunks/modelAPI/task/yearlyTaskAPI";

interface propsTypes {
  onClosingModal: () => void;
}

const AddYearlyModal: React.FC<propsTypes> = ({ onClosingModal }) => {
  const [userValue, setUserValue] = React.useState<string>("");
  const [addYearlyTask, { isLoading }] = useAddYearlyTaskMutation();

  const normalizedValue = userValue.trim();
  const isDisabled = normalizedValue.length < 2 || isLoading;

  const handleAddYearlyGoal = async () => {
    if (isDisabled) return;
    try {
      await addYearlyTask(normalizedValue).unwrap();
      onClosingModal();
    } catch (error) {
      console.error("Failed to add yearly goal", error);
    }
  };

  return (
    <div className="task-modal-shell" style={addPanelStyle}>
      <TaskCardLabelContent
        heading="Add Yearly Goal"
        label="Goal Name"
        userValue={userValue}
        setUserValue={setUserValue}
        placeholder="e.g., Complete 3 major releases"
      />
      <TaskCardActionButtons
        isDisabled={isDisabled}
        handleSubmit={handleAddYearlyGoal}
        handleClose={onClosingModal}
        backLabel="Close"
        enterLabel={isLoading ? "Saving..." : "Submit"}
      />
    </div>
  );
};

export default AddYearlyModal;
