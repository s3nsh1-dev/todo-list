import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

const Draggable = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "draggable",
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };

  return (
    <div className="bg-amber-300 h-50 w-50">
      i am draggable
      <button ref={setNodeRef} style={style} {...listeners} {...attributes}>
        {props.children}
      </button>
    </div>
  );
};

export default Draggable;
