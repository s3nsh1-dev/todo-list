import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NotesCards from "./NotesCards";

const ShowSavedNotes = () => {
  const data = useSelector((state: RootState) => state.notesArray);

  if (data.length === 0) {
    return (
      <div className="note-empty">
        <p className="type-display-sm">No saved notes yet</p>
      </div>
    );
  }

  return (
    <div className="note-grid">
      {data.map((note) => {
        return (
          <NotesCards
            key={note.id}
            id={note.id}
            title={note.title}
            content={note.content}
          />
        );
      })}
    </div>
  );
};

export default ShowSavedNotes;
