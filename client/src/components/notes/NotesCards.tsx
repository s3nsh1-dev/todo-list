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
    setOpen((prev) => {
      return {
        ...prev,
        view: false,
        edit: false,
      };
    });
  };

  const dispatch = useDispatch();

  const handelRemoveNotes = () => {
    dispatch(removeNotesFromLocalStorage(id));
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      alert("Content Copied");
    } catch (error: unknown) {
      console.log("ERROR in copy", error);
    }
  };

  const toggleView = () => {
    setOpen((prev) => {
      return {
        ...prev,
        view: !prev.view,
        edit: false,
      };
    });
  };
  const toggleEdit = () => {
    setOpen({
      view: false,
      edit: !open.edit,
    });
  };

  return (
    <>
      <div
        className="flex justify-between gap-5 flex-col border-2 border-gray-400 rounded max-w-xl"
        style={{ padding: "10px" }}
      >
        <div className="flex flex-col gap-2">
          <h1
            className="rounded border-2 border-gray-500 overflow-hidden font-bold whitespace-nowrap text-ellipsis max-w-60"
            style={{ padding: "5px" }}
          >
            {title}
          </h1>
          <div
            className=" border-gray-500 border-2 overflow-hidden h-25 rounded"
            style={{ padding: "5px" }}
          >
            {content}
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outlined" color="success" onClick={toggleView}>
            <span className="font-bold">Open</span>
          </Button>
          <Button variant="outlined" color="warning" onClick={toggleEdit}>
            <span className="font-bold">Edit</span>
          </Button>
          <Button variant="outlined" color="error" onClick={handelRemoveNotes}>
            <span className="font-bold">Delete</span>
          </Button>
          <Button variant="outlined" color="info" onClick={handleCopy}>
            <span className="font-bold">Copy</span>
          </Button>
        </div>
      </div>
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

// add date to the card
