import { Link } from "react-router-dom";

const NotesLink = () => {
  return (
    <Link to="notes" className="home-notes-link">
      <p className="home-notes-title">Notes</p>
      <small className="home-notes-subtitle">Capture context and quick ideas</small>
    </Link>
  );
};

export default NotesLink;
