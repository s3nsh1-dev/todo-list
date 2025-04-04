import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NotesCards from "./NotesCards";

const ShowSavedNotes = () => {
  const data = useSelector((state: RootState) => state.notesArray.notes);
  console.log("Notes Data:", data);
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
