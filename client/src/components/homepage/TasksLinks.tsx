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

const subtitleMap: Record<string, string> = {
  "bg-blue-500": "Execution and short-term priorities",
  "bg-yellow-500": "Weekly planning and follow-through",
  "bg-red-500": "Monthly outcome tracking",
  "bg-green-600": "Long-term strategic goals",
};

const TasksLinks: React.FC<tasksLinksPropsType> = ({ route, text, color }) => {
  return (
    <Link to={route} className={`home-route-link ${toneMap[color]}`}>
      <p>{text}</p>
      <small>{subtitleMap[color]}</small>
    </Link>
  );
};

export default TasksLinks;
