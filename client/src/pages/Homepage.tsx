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
        <header className="home-header">
          <p className="home-badge">Personal Productivity Suite</p>
          <h1>
            <ToDoHeading />
          </h1>
          <p>
            Plan clearly across daily, weekly, monthly, and yearly horizons in
            one focused workspace.
          </p>
        </header>

        <section className="home-surface">
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
