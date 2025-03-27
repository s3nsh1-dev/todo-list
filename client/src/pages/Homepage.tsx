import NotesLink from "../components/Homepage/NotesLink";
import TasksLinks from "../components/Homepage/TasksLinks";
import { RouteButtonProperties } from "../constants/HomepageConstants";
import ToDoHeading from "../components/others/ToDoHeading";

const Homepage = () => {
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
  return (
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
  );
};
export default Homepage;
