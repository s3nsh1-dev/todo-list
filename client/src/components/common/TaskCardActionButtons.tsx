import Button from "@mui/material/Button";
import { FC } from "react";

type propsTypes = {
  isDisabled: boolean;
  handleSubmit: () => void;
  handleClose: () => void;
  backLabel: string;
  enterLabel: string;
};

const TaskCardActionButtons: FC<propsTypes> = ({
  isDisabled,
  handleSubmit,
  handleClose,
  backLabel,
  enterLabel,
}) => {
  return (
    <div id="add-dailyTask-actionButtons" className="task-form-actions">
      <Button color="error" variant="contained" onClick={handleClose}>
        {backLabel}
      </Button>
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="success"
        disabled={isDisabled}
      >
        {enterLabel}
      </Button>
    </div>
  );
};

export default TaskCardActionButtons;
