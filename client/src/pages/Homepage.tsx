import React from "react";
import NotesLink from "../components/Homepage/NotesLink";
import TasksLinks from "../components/Homepage/TasksLinks";
import { RouteButtonProperties } from "../constants/HomepageConstants";

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
      <h1 className="font-bold text-5xl">what ToDo....?</h1>
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
