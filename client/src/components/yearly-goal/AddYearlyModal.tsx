import React from "react";
import TaskCardActionButtons from "../common/TaskCardActionButtons";
import TaskCardLabelContent from "../common/TaskCardLabelContent";
import { addPanelStyle } from "../../constants/customCssProperties";
import { useDispatch } from "react-redux";
import { addYearlyGoal } from "../../redux/slices/yearlyGoalsSlice";

interface propsTypes {
  onClosingModal: () => void;
}

const AddYearlyModal: React.FC<propsTypes> = ({ onClosingModal }) => {
  const [userValue, setUserValue] = React.useState<string>("");
  const isDisabled = userValue.length > 1 ? false : true;
  const dispatch = useDispatch();
  const handleAddWeeklyGoal = () => {
    dispatch(addYearlyGoal(userValue));
    onClosingModal();
  };

  return (
    <div className="bg-gray-800" style={addPanelStyle}>
      <TaskCardLabelContent
        heading="Add Yearly Goal"
        label="Resolution Name"
        userValue={userValue}
        setUserValue={setUserValue}
        placeholder="e.g., Need to go Change"
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

export default AddYearlyModal;
