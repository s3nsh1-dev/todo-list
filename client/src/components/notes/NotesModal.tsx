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
  const [data, setData] = React.useState<{
    newTitle: string;
    newContent: string;
  }>({
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
      alert("Content Copied!");
    } catch (err) {
      console.error("Failed to copy content:", err);
    }
  };
  return (
    <Modal open={open} onClose={onClose}>
      <div
        className="bg-gray-800 rounded flex flex-col gap-8"
        style={notesPanelStyle}
      >
        <div className="flex flex-col gap-6">
          <input
            className="text-xl font-bold border-2 border-gray-500 rounded"
            style={{ padding: "5px 10px" }}
            // defaultValue={title}
            disabled={disabled}
            value={data.newTitle}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, newTitle: e.target.value };
              });
            }}
          />
          <textarea
            className="text-gray-300 whitespace-pre-wrap overflow-auto h-90 border-2 border-gray-500 rounded"
            style={{ padding: "5px 10px" }}
            // defaultValue={content}
            disabled={disabled}
            value={data.newContent}
            onChange={(e) => {
              setData((prev) => {
                return { ...prev, newContent: e.target.value };
              });
            }}
          />
        </div>
        <div className="flex justify-end gap-4">
          <Button variant="outlined" color="primary" onClick={handleCopy}>
            Copy
          </Button>
          <Button variant="outlined" color="secondary" onClick={onClose}>
            Back
          </Button>
          {!disabled && (
            <Button
              variant="outlined"
              color="success"
              onClick={handleUpdateNote}
            >
              Save
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
};

export default NotesModal;
