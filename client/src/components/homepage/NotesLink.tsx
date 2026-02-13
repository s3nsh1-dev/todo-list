import { Link } from "react-router-dom";

const NotesLink = () => {
  return (
    <Link to="notes" className="home-notes-link">
      <p className="home-notes-text">NOTES</p>
    </Link>
  );
};

export default NotesLink;
