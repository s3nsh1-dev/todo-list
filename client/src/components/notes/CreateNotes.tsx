import { TextareaAutosize, Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addNotesToLocalStorage } from "../../redux/slices/localStorageSlice";

const CreateNotes = () => {
  const dispatch = useDispatch();
  const [titleValue, setTitleValue] = React.useState<string>("");
  const [contentValue, setContentValue] = React.useState<string>("");

  const handleNothing = () => {
    setTitleValue("");
    setContentValue("");
  };

  const handleSave = () => {
    const title = titleValue.trim() === "" ? "Untitled" : titleValue.trim();
    dispatch(addNotesToLocalStorage({ title, content: contentValue }));
    setTitleValue("");
    setContentValue("");
    alert("Note Saved");
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contentValue);
      alert("Note copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  return (
    <section className="note-editor-card">
      <TextareaAutosize
        placeholder="Enter title"
        value={titleValue}
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        className="note-input-title"
      />
      <TextareaAutosize
        aria-label="Note Content"
        minRows={14}
        placeholder="Write your note here..."
        value={contentValue}
        onChange={(e) => {
          setContentValue(e.target.value);
        }}
        className="note-input-body"
      />
      <div className="note-toolbar">
        <Button variant="outlined" color="warning" onClick={handleNothing}>
          Cancel
        </Button>
        <Button variant="outlined" color="success" onClick={handleSave}>
          Save
        </Button>
        <Button variant="outlined" color="primary" onClick={handleCopy}>
          Copy
        </Button>
      </div>
    </section>
  );
};

export default CreateNotes;
