import { Link } from "react-router-dom";
import React from "react";

interface tasksLinksPropsType {
  route: string;
  text: string;
  color: string;
}

const toneMap: Record<string, string> = {
  "bg-blue-500": "home-route-daily",
  "bg-yellow-500": "home-route-weekly",
  "bg-red-500": "home-route-monthly",
  "bg-green-600": "home-route-yearly",
};

const TasksLinks: React.FC<tasksLinksPropsType> = ({ route, text, color }) => {
  return (
    <Link to={route} className={`home-route-link ${toneMap[color]}`}>
      <small>Open Module</small>
      <p>{text}</p>
    </Link>
  );
};

export default TasksLinks;
