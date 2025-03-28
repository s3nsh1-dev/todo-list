import Button from "@mui/material/Button";
import { FC } from "react";
type propsTypes = {
  isDisabled: boolean;
  handleSubmit: () => void;
  handleClose: () => void;
};

const AddTaskActions: FC<propsTypes> = ({
  isDisabled,
  handleSubmit,
  handleClose,
}) => {
  return (
    <div
      id="add-dailyTask-actionButtons"
      className="flex justify-center item-center gap-3"
    >
      <Button color="error" variant="contained" onClick={handleClose}>
        Cancel
      </Button>
      <Button
        onClick={handleSubmit}
        variant="contained"
        color="success"
        disabled={isDisabled}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddTaskActions;
