import { Link } from "react-router-dom";
import StickyNote2OutlinedIcon from "@mui/icons-material/StickyNote2Outlined";

const NotesLink = () => {
  return (
    <Link to="notes" className="home-notes-link">
      <div className="home-route-topline">
        <span>Workspace</span>
        <StickyNote2OutlinedIcon sx={{ fontSize: 16, color: "var(--muted)" }} />
      </div>
      <p className="home-notes-title">Notes</p>
      <small className="home-notes-subtitle">Capture context and quick ideas</small>
    </Link>
  );
};

export default NotesLink;
