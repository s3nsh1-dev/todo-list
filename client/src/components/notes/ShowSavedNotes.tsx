import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NotesCards from "./NotesCards";

const ShowSavedNotes = () => {
  const data = useSelector((state: RootState) => state.notesArray);
  if (data.length === 0) {
    return (
      <div className="flex flex-wrap justify-center gap-5">
        <p className="font-bold text-2xl">No Notes Saved</p>
      </div>
    );
  }
  const renderNotesCard = data.map((note) => {
    return (
      <NotesCards
        key={note.id}
        id={note.id}
        title={note.title}
        content={note.content}
      />
    );
  });
  return (
    <div className="flex flex-wrap justify-center gap-5">{renderNotesCard}</div>
  );
};

export default ShowSavedNotes;
