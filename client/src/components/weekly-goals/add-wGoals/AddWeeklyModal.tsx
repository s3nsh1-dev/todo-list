import React from "react";
import TaskCardActionButtons from "../../DailyTasks/add-tasks/TaskCardActionButtons";
import TaskCardLabelContent from "../../DailyTasks/add-tasks/TaskCardLabelContent";
import { addPanelStyle } from "../../../constants/customCssProperties";
import { useDispatch } from "react-redux";
import { addWeeklyGoals } from "../../../redux/slices/weeklyGoalsSlice";

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
    <div style={addPanelStyle}>
      <TaskCardLabelContent
        heading="Add Weekly Goal"
        label="Goal Name"
        userValue={userValue}
        setUserValue={setUserValue}
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
