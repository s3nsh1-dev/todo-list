import React from "react";
import Modal from "@mui/material/Modal";
import TaskCardActionButtons from "./TaskCardActionButtons";
import TaskCardLabelContent from "./TaskCardLabelContent";
import { addPanelStyle } from "../../constants/customCssProperties";

interface ShowEditModalProps {
  isDisabled: boolean;
  submitEditedTask: () => void;
  userValue: string;
  setUserValue: (value: string) => void;
  open: boolean;
  onClose: () => void;
}

const ShowEditModal: React.FC<ShowEditModalProps> = ({
  isDisabled,
  submitEditedTask,
  userValue,
  setUserValue,
  open,
  onClose,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <section className="bg-gray-800" style={addPanelStyle}>
        <TaskCardLabelContent
          userValue={userValue}
          setUserValue={setUserValue}
          heading="Edit Task"
          label="Update Task Name"
        />
        <article>
          <TaskCardActionButtons
            isDisabled={isDisabled}
            handleSubmit={submitEditedTask}
            handleClose={onClose}
            backLabel="Cancel"
            enterLabel="Save"
          />
        </article>
      </section>
    </Modal>
  );
};

export default ShowEditModal;
