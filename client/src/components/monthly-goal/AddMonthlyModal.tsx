import React from "react";
import TaskCardActionButtons from "../common/TaskCardActionButtons";
import TaskCardLabelContent from "../common/TaskCardLabelContent";
import { addPanelStyle } from "../../constants/customCssProperties";
import { useAddMonthlyTaskMutation } from "../../redux/thunks/modelAPI/task/monthlyTaskAPI";

interface propsTypes {
  onClosingModal: () => void;
}

const AddMonthlyModal: React.FC<propsTypes> = ({ onClosingModal }) => {
  const [userValue, setUserValue] = React.useState<string>("");
  const [addMonthlyTask, { isLoading }] = useAddMonthlyTaskMutation();

  const normalizedValue = userValue.trim();
  const isDisabled = normalizedValue.length < 2 || isLoading;

  const handleAddMonthlyGoal = async () => {
    if (isDisabled) return;
    try {
      await addMonthlyTask(normalizedValue).unwrap();
      onClosingModal();
    } catch (error) {
      console.error("Failed to add monthly goal", error);
    }
  };

  return (
    <div className="task-modal-shell" style={addPanelStyle}>
      <TaskCardLabelContent
        heading="Add Monthly Goal"
        label="Goal Name"
        userValue={userValue}
        setUserValue={setUserValue}
        placeholder="e.g., Ship portfolio improvements"
      />
      <TaskCardActionButtons
        isDisabled={isDisabled}
        handleSubmit={handleAddMonthlyGoal}
        handleClose={onClosingModal}
        backLabel="Close"
        enterLabel={isLoading ? "Saving..." : "Submit"}
      />
    </div>
  );
};

export default AddMonthlyModal;
