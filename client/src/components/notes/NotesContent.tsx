import ShowSavedNotes from "./ShowSavedNotes";
import CreateNotes from "./CreateNotes";

interface propTypes {
  open: boolean;
}

const NotesContent: React.FC<propTypes> = ({ open }) => {
  return <div>{open ? <CreateNotes /> : <ShowSavedNotes />}</div>;
};
export default NotesContent;
