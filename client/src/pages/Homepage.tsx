import NotesLink from "../components/homepage/NotesLink";
import TasksLinks from "../components/homepage/TasksLinks";
import { RouteButtonProperties } from "../constants/HomepageConstants";
import ToDoHeading from "../components/others/ToDoHeading";
import { useGlobalContext } from "../hook/useGlobalContext";
import Modal from "@mui/material/Modal";
import IntroCard from "../components/homepage/IntroCard";

const Homepage = () => {
  const { intoFlag, setIntoFlag } = useGlobalContext();

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
      <div className="home-layout">
        <section className="home-hero">
          <h1>
            Build your day with <ToDoHeading />
          </h1>
          <p>
            A structured productivity workspace for daily execution and long-term
            goals.
          </p>
        </section>

        <section className="home-actions">
          <div className="home-actions-grid">{renderRouteButtons}</div>
          <NotesLink />
        </section>
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
