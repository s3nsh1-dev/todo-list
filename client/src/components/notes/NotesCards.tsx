import React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { removeNotesFromLocalStorage } from "../../redux/slices/localStorageSlice";
import NotesModal from "./NotesModal";

interface propTypes {
  title: string;
  content: string;
  id: string;
}

const NotesCards: React.FC<propTypes> = ({ id, title, content }) => {
  const [open, setOpen] = React.useState<{ edit: boolean; view: boolean }>({
    edit: false,
    view: false,
  });

  const handleOnClose = () => {
    setOpen({ edit: false, view: false });
  };

  const dispatch = useDispatch();

  const handleRemoveNotes = () => {
    dispatch(removeNotesFromLocalStorage(id));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      alert("Content copied");
    } catch (error: unknown) {
      console.log("ERROR in copy", error);
    }
  };

  const toggleView = () => {
    setOpen((prev) => ({ ...prev, view: !prev.view, edit: false }));
  };

  const toggleEdit = () => {
    setOpen({ view: false, edit: !open.edit });
  };

  return (
    <>
      <article className="note-card">
        <div className="flex flex-col gap-2">
          <h1 className="note-card-title">{title}</h1>
          <p className="note-card-content">{content}</p>
        </div>

        <div className="note-card-actions">
          <Button variant="outlined" color="success" onClick={toggleView}>
            Open
          </Button>
          <Button variant="outlined" color="warning" onClick={toggleEdit}>
            Edit
          </Button>
          <Button variant="outlined" color="error" onClick={handleRemoveNotes}>
            Delete
          </Button>
          <Button variant="outlined" color="info" onClick={handleCopy}>
            Copy
          </Button>
        </div>
      </article>

      {open.view && !open.edit && (
        <NotesModal
          id={id}
          open={open.view}
          onClose={handleOnClose}
          title={title}
          content={content}
          disabled={true}
        />
      )}

      {open.edit && !open.view && (
        <NotesModal
          id={id}
          open={open.edit}
          onClose={handleOnClose}
          title={title}
          content={content}
          disabled={false}
        />
      )}
    </>
  );
};

export default NotesCards;
