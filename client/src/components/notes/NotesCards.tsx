import React from "react";
import Button from "@mui/material/Button";

interface propTypes {
  title: string;
  content: string;
}

const NotesCards: React.FC<propTypes> = ({ title, content }) => {
  return (
    <div
      className="flex justify-between gap-5 flex-col border-2 border-gray-400 rounded-2xl"
      style={{ margin: "10px 0px", padding: "10px" }}
    >
      <div className="flex flex-col gap-2">
        <h1
          className="rounded border-2 border-gray-500 overflow-hidden text-xl font-bold whitespace-nowrap text-ellipsis max-w-60"
          style={{ padding: "5px" }}
        >
          {title}
        </h1>
        <div
          className="text-xl border-gray-500 border-2 overflow-hidden h-25 rounded"
          style={{ padding: "5px" }}
        >
          {content}
        </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outlined" color="info">
          <span className="font-bold">Open</span>
        </Button>
        <Button variant="outlined" color="warning">
          <span className="font-bold">Edit</span>
        </Button>
        <Button variant="outlined" color="error">
          <span className="font-bold">Delete</span>
        </Button>
      </div>
    </div>
  );
};

export default NotesCards;
