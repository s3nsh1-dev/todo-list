import { Link } from "react-router-dom";
import React from "react";
import { hoverAnimation } from "../../constants/GenericConstants";

const moreCss: string = `rounded-xl w-50 font-bold cursor-pointer`;

interface tasksLinksPropsType {
  route: string;
  text: string;
  color: string;
}

const TasksLinks: React.FC<tasksLinksPropsType> = ({ route, text, color }) => {
  return (
    <Link to={route}>
      <div
        className={`${color} ${moreCss} ${hoverAnimation}`}
        style={{ padding: "0.5rem" }}
      >
        {text}
      </div>
    </Link>
  );
};

export default TasksLinks;
