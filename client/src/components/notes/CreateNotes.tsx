import { TextareaAutosize, Box, Button } from "@mui/material";
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
    const title =
      titleValue === " " || titleValue === "" ? "Untitled" : titleValue;
    dispatch(addNotesToLocalStorage({ title, content: contentValue }));
    setTitleValue("");
    setContentValue("");
    alert("Note Saved");
  };
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contentValue);
      // Optionally, provide user feedback
      alert("Note copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };
  return (
    <Box
      sx={{
        mx: "auto",
        mt: 4,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "2px solid #e0e0e0",
        borderRadius: 2,
        boxShadow: 2,
        fontSize: "1.2rem",
      }}
    >
      <TextareaAutosize
        placeholder="Enter Title"
        value={titleValue}
        onChange={(e) => {
          setTitleValue(e.target.value);
        }}
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      />
      <TextareaAutosize
        aria-label="Note Content"
        minRows={14}
        placeholder="Write your note here..."
        value={contentValue}
        onChange={(e) => {
          setContentValue(e.target.value);
        }}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "inherit",
        }}
      />
      <div className="flex gap-3">
        <Button
          variant="outlined"
          color="warning"
          sx={{ fontWeight: "bold" }}
          onClick={handleNothing}
        >
          Cancel
        </Button>
        <Button
          variant="outlined"
          color="success"
          sx={{ fontWeight: "bold" }}
          onClick={handleSave}
        >
          Save
        </Button>
        <Button
          variant="outlined"
          color="primary"
          sx={{ fontWeight: "bold" }}
          onClick={handleCopy}
        >
          Copy
        </Button>
      </div>
    </Box>
  );
};

export default CreateNotes;
