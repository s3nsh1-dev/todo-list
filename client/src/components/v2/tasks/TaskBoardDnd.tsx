import React from "react";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import type { ReorderPayload, TaskWithOrder } from "../../../constants/taskAdapters";
import { createReorderPayload } from "../../../hooks/v2/useTaskBoard";

interface TaskBoardDndProps<T extends TaskWithOrder> {
  tasks: T[];
  onReorder: (payload: ReorderPayload) => void;
  children: React.ReactNode;
}

const TaskBoardDnd = <T extends TaskWithOrder>({
  tasks,
  onReorder,
  children,
}: TaskBoardDndProps<T>) => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <DndContext
      sensors={sensors}
      modifiers={[restrictToParentElement]}
      collisionDetection={closestCorners}
      onDragEnd={(event) => {
        const { active, over } = event;
        if (!over) return;
        if (active.id === over.id) return;

        const payload = createReorderPayload(
          tasks,
          String(active.id),
          String(over.id)
        );

        if (!payload) return;

        onReorder(payload);
      }}
    >
      <SortableContext
        items={tasks.map((task) => task._id)}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default TaskBoardDnd;
