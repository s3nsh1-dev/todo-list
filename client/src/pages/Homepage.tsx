import NotesLink from "../components/homepage/NotesLink";
import TasksLinks from "../components/homepage/TasksLinks";
import { RouteButtonProperties } from "../constants/HomepageConstants";
import ToDoHeading from "../components/others/ToDoHeading";
import { useGlobalContext } from "../hook/useGlobalContext";
import Modal from "@mui/material/Modal";
import IntroCard from "../components/homepage/IntroCard";

const Homepage = () => {
  const { intoFlag, setIntoFlag } = useGlobalContext();
  console.log("intoFlag", intoFlag);
  const renderRouteButtons: React.ReactNode[] = RouteButtonProperties.map(
    (buttons) => {
      return (
        <TasksLinks
          key={buttons.id}
          route={buttons.route}
          text={buttons.text}
          color={buttons.color}
        />
      );
    }
  );
  const handleCloseIntro = () => {
    setIntoFlag(false);
  };
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen gap-20">
        <h1 className="font-bold text-5xl">
          what <ToDoHeading />
        </h1>
        <div className="flex gap-3 text-center">
          <div className="flex flex-col justify-center items-center gap-3">
            {renderRouteButtons}
          </div>
          <NotesLink />
        </div>
      </div>
      {intoFlag && (
        <Modal open={intoFlag} onClose={handleCloseIntro}>
          <IntroCard onClose={handleCloseIntro} />
        </Modal>
      )}
    </>
  );
};
export default Homepage;
