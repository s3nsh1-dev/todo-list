import { useState, type CSSProperties } from "react";
import IconButton from "@mui/material/IconButton";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import TaskModalForm from "./TaskModalForm";

interface TaskRowProps {
  id: string;
  name: string;
  completed: boolean;
  draggable?: boolean;
  onToggleStatus: () => void;
  onDelete?: () => void;
  onEdit?: (newName: string) => void;
}

const TaskRow: React.FC<TaskRowProps> = ({
  id,
  name,
  completed,
  draggable = false,
  onToggleStatus,
  onDelete,
  onEdit,
}) => {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    disabled: !draggable,
  });

  const rowStyle: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.65 : 1,
    position: isDragging ? "relative" : "static",
    zIndex: isDragging ? 30 : "auto",
  };

  return (
    <>
      <article
        ref={setNodeRef}
        style={rowStyle}
        className="flex items-center justify-between gap-3 py-3"
      >
        <div className="flex min-w-0 items-center gap-2">
          {draggable ? (
            <IconButton
              {...listeners}
              {...attributes}
              className="cursor-grab active:cursor-grabbing"
              size="small"
            >
              <DragIndicatorIcon sx={{ color: "#62718f" }} />
            </IconButton>
          ) : null}
          <p
            className={`truncate text-sm sm:text-base ${
              completed ? "text-slate-500 line-through" : "text-slate-800"
            }`}
            title={name}
          >
            {name}
          </p>
        </div>

        <div className="flex items-center gap-1">
          {!completed && onEdit ? (
            <IconButton size="small" onClick={() => setIsEditOpen(true)}>
              <ModeEditIcon className="text-slate-500 hover:text-blue-600" />
            </IconButton>
          ) : null}

          {completed && onDelete ? (
            <IconButton size="small" onClick={onDelete}>
              <DeleteOutlineIcon className="text-slate-500 hover:text-red-600" />
            </IconButton>
          ) : null}

          <IconButton size="small" onClick={onToggleStatus}>
            {completed ? (
              <HighlightOffIcon className="text-slate-500 hover:text-red-600" />
            ) : (
              <TaskAltIcon className="text-slate-500 hover:text-green-600" />
            )}
          </IconButton>
        </div>
      </article>

      {!completed && onEdit ? (
        <TaskModalForm
          open={isEditOpen}
          title="Edit Task"
          label="Task Name"
          placeholder={name}
          submitLabel="Save"
          initialValue={name}
          onClose={() => setIsEditOpen(false)}
          onSubmit={(newValue) => {
            onEdit(newValue);
            setIsEditOpen(false);
          }}
        />
      ) : null}
    </>
  );
};

export default TaskRow;
