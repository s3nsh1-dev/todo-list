import { Link } from "react-router-dom";
import { hoverAnimation } from "../../constants/GenericConstants";

const NotesLink = () => {
  return (
    <Link
      to="notes"
      className={`bg-purple-500 flex justify-center items-center w-10 rounded-xl cursor-pointer ${hoverAnimation}`}
    >
      <p className={`rotate-90 flex gap-3 font-bold`}>
        <span className="rotate-270">N</span>
        <span className="rotate-270">O</span>
        <span className="rotate-270">T</span>
        <span className="rotate-270">E</span>
        <span className="rotate-270">S</span>
      </p>
    </Link>
  );
};

export default NotesLink;
