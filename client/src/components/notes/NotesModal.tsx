import React from "react";
import Modal from "@mui/material/Modal";
import { notesPanelStyle } from "../../constants/customCssProperties";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { updateNotesInLocalStorage } from "../../redux/slices/localStorageSlice";

interface propTypes {
  id: string;
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  disabled: boolean;
}

const NotesModal: React.FC<propTypes> = ({
  id,
  open,
  onClose,
  title,
  content,
  disabled,
}) => {
  const [data, setData] = React.useState<{ newTitle: string; newContent: string }>({
    newTitle: title,
    newContent: content,
  });

  const dispatch = useDispatch();

  const handleUpdateNote = () => {
    dispatch(
      updateNotesInLocalStorage({
        id,
        title: data.newTitle,
        content: data.newContent,
      })
    );
    onClose();
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(data.newContent);
      alert("Content copied");
    } catch (err) {
      console.error("Failed to copy content:", err);
    }
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="note-modal-card" style={notesPanelStyle}>
        <div className="flex flex-col gap-5">
          <input
            className="note-input-title"
            disabled={disabled}
            value={data.newTitle}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, newTitle: e.target.value };
              });
            }}
          />
          <textarea
            className="note-input-body note-modal-body"
            disabled={disabled}
            value={data.newContent}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, newContent: e.target.value };
              });
            }}
          />
        </div>

        <div className="note-toolbar note-toolbar-right">
          <Button variant="outlined" color="primary" onClick={handleCopy}>
            Copy
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Back
          </Button>
          {!disabled && (
            <Button variant="outlined" color="success" onClick={handleUpdateNote}>
              Save
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default NotesModal;
