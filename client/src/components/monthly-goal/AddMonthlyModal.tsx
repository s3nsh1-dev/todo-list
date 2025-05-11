import React from "react";
import TaskCardActionButtons from "../common/TaskCardActionButtons";
import TaskCardLabelContent from "../common/TaskCardLabelContent";
import { addPanelStyle } from "../../constants/customCssProperties";
import { useDispatch } from "react-redux";
import { addMonthlyGoals } from "../../redux/slices/model/monthlyGoalsSlice";

interface propsTypes {
  onClosingModal: () => void;
}

const AddMonthlyModal: React.FC<propsTypes> = ({ onClosingModal }) => {
  const [userValue, setUserValue] = React.useState<string>("");
  const isDisabled = userValue.length > 1 ? false : true;
  const dispatch = useDispatch();
  const handleAddWeeklyGoal = () => {
    dispatch(addMonthlyGoals(userValue));
    onClosingModal();
  };

  return (
    <div className="bg-gray-800" style={addPanelStyle}>
      <TaskCardLabelContent
        heading="Add Monthly Goal"
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

export default AddMonthlyModal;
