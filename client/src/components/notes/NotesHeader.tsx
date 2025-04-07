import { Button } from "@mui/material";
import RedirectToHome from "../others/RedirectToHome";

interface propTypes {
  open: boolean;
  toggleNotes: () => void;
}

const NotesHeader: React.FC<propTypes> = ({ open, toggleNotes }) => {
  return (
    <div
      className="flex justify-between"
      style={{ marginBottom: "10px", marginTop: "5px" }}
    >
      <h1 className="font-bold flex items-center text-2xl">Notes</h1>
      <div className="flex gap-2">
        <RedirectToHome />
        <Button
          variant={open ? "contained" : "outlined"}
          onClick={toggleNotes}
          color="success"
        >
          Create
        </Button>
        <Button
          variant={open ? "outlined" : "contained"}
          onClick={toggleNotes}
          color="secondary"
        >
          Saved
        </Button>
      </div>
    </div>
  );
};

export default NotesHeader;
