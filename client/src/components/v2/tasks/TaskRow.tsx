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

interface TaskRowContentProps {
  name: string;
  completed: boolean;
  draggable: boolean;
  onToggleStatus: () => void;
  onDelete?: () => void;
  onOpenEdit?: () => void;
  rowProps?: {
    ref?: (node: HTMLElement | null) => void;
    style?: CSSProperties;
  };
  dragHandleProps?: {
    listeners?: object;
    attributes?: object;
  };
}

const TaskRowContent: React.FC<TaskRowContentProps> = ({
  name,
  completed,
  draggable,
  onToggleStatus,
  onDelete,
  onOpenEdit,
  rowProps,
  dragHandleProps,
}) => {
  return (
    <article
      ref={rowProps?.ref}
      style={rowProps?.style}
      className="task-row"
    >
      <div className="task-row-content">
        {draggable ? (
          <IconButton
            {...((dragHandleProps?.listeners || {}) as object)}
            {...((dragHandleProps?.attributes || {}) as object)}
            className="cursor-grab active:cursor-grabbing"
            size="small"
          >
            <DragIndicatorIcon sx={{ color: "var(--muted)" }} />
          </IconButton>
        ) : null}

        <p
          className={`task-row-name ${completed ? "task-row-name-completed" : ""}`}
          title={name}
        >
          {name}
        </p>
      </div>

      <div className="task-row-actions">
        {!completed && onOpenEdit ? (
          <IconButton size="small" onClick={onOpenEdit}>
            <ModeEditIcon sx={{ color: "var(--muted)" }} />
          </IconButton>
        ) : null}

        {completed && onDelete ? (
          <IconButton size="small" onClick={onDelete}>
            <DeleteOutlineIcon sx={{ color: "#d16f6f" }} />
          </IconButton>
        ) : null}

        <IconButton size="small" onClick={onToggleStatus}>
          {completed ? (
            <HighlightOffIcon sx={{ color: "#d16f6f" }} />
          ) : (
            <TaskAltIcon sx={{ color: "#34a67b" }} />
          )}
        </IconButton>
      </div>
    </article>
  );
};

interface SortableTaskRowProps {
  id: string;
  name: string;
  completed: boolean;
  onToggleStatus: () => void;
  onDelete?: () => void;
  onOpenEdit?: () => void;
}

const SortableTaskRow: React.FC<SortableTaskRowProps> = ({
  id,
  name,
  completed,
  onToggleStatus,
  onDelete,
  onOpenEdit,
}) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id,
    });

  const rowStyle: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.65 : 1,
    position: isDragging ? "relative" : "static",
    zIndex: isDragging ? 30 : "auto",
  };

  return (
    <TaskRowContent
      name={name}
      completed={completed}
      draggable
      onToggleStatus={onToggleStatus}
      onDelete={onDelete}
      onOpenEdit={onOpenEdit}
      rowProps={{ ref: setNodeRef, style: rowStyle }}
      dragHandleProps={{ listeners, attributes }}
    />
  );
};

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

  return (
    <>
      {draggable ? (
        <SortableTaskRow
          id={id}
          name={name}
          completed={completed}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
          onOpenEdit={onEdit ? () => setIsEditOpen(true) : undefined}
        />
      ) : (
        <TaskRowContent
          name={name}
          completed={completed}
          draggable={false}
          onToggleStatus={onToggleStatus}
          onDelete={onDelete}
          onOpenEdit={onEdit ? () => setIsEditOpen(true) : undefined}
        />
      )}

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
