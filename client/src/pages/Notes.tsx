import React from "react";
import NotesHeader from "../components/notes/NotesHeader";
import NotesContent from "../components/notes/NotesContent";

const Notes = () => {
  const [open, setOpen] = React.useState<boolean>(true);

  const toggleNotes = () => {
    setOpen((open) => !open);
  };
  return (
    <div style={{ margin: "5px 7%" }}>
      <NotesHeader open={open} toggleNotes={toggleNotes} />
      <NotesContent open={open} />
    </div>
  );
};

export default Notes;
