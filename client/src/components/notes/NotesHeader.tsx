import { Button } from "@mui/material";
import RedirectToHome from "../others/RedirectToHome";
import ThemeToggle from "../common/ThemeToggle";

interface propTypes {
  open: boolean;
  toggleNotes: () => void;
}

const NotesHeader: React.FC<propTypes> = ({ open, toggleNotes }) => {
  return (
    <div className="module-toolbar" style={{ marginBottom: "10px", marginTop: "5px" }}>
      <div>
        <p className="module-toolbar-eyebrow">Knowledge Capture</p>
        <h1 className="module-toolbar-title type-display-md">Notes</h1>
      </div>

      <div className="flex items-center gap-2">
        <ThemeToggle />
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
