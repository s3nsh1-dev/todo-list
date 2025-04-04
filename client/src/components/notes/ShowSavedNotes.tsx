import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import NotesCards from "./NotesCards";

const ShowSavedNotes = () => {
  const data = useSelector((state: RootState) => state.notesArray.notes);
  const renderNotesCard = data.map((note) => {
    return (
      <NotesCards key={note.id} title={note.title} content={note.content} />
    );
  });
  return <div>{renderNotesCard}</div>;
};

export default ShowSavedNotes;
