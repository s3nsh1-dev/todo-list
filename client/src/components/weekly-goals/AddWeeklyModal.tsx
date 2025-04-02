import React from "react";
import TaskCardActionButtons from "../common/TaskCardActionButtons";
import TaskCardLabelContent from "../common/TaskCardLabelContent";
import { addPanelStyle } from "../../constants/customCssProperties";
import { useDispatch } from "react-redux";
import { addWeeklyGoals } from "../../redux/slices/weeklyGoalsSlice";

interface propsTypes {
  onClosingModal: () => void;
}

const AddWeeklyModal: React.FC<propsTypes> = ({ onClosingModal }) => {
  const [userValue, setUserValue] = React.useState<string>("");
  const isDisabled = userValue.length > 1 ? false : true;
  const dispatch = useDispatch();
  const handleAddWeeklyGoal = () => {
    dispatch(addWeeklyGoals(userValue));
    onClosingModal();
  };

  return (
    <div className="bg-gray-800" style={addPanelStyle}>
      <TaskCardLabelContent
        heading="Add Weekly Goal"
        label="Goal Name"
        userValue={userValue}
        setUserValue={setUserValue}
        placeholder="e.g., Need to go shopping"
      />
      <TaskCardActionButtons
        isDisabled={isDisabled}
        handleSubmit={handleAddWeeklyGoal}
        handleClose={onClosingModal}
        backLabel="Close"
        enterLabel="SUBMIT"
      />
    </div>
  );
};

export default AddWeeklyModal;
