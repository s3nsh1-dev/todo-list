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
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import type { YearlyGoalType } from "../../constants/commonInterfaces";

interface propTypes {
  children: React.ReactNode;
  ongoingTasks: YearlyGoalType[];
  onReorder: ({ orderedTasks }: { orderedTasks: GG[] }) => void;
}

type GG = {
  _id: string;
  order: number;
};

const DndKitDefault: React.FC<propTypes> = ({
  children,
  ongoingTasks,
  onReorder, // <-- receive the prop
}) => {
  const sensor = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  return (
    <DndContext
      sensors={sensor}
      modifiers={[restrictToParentElement]}
      collisionDetection={closestCorners}
      onDragEnd={(e) => {
        const { active, over } = e;
        if (!over) return;
        if (active.id === over.id) return;
        const draggedIndex = ongoingTasks.findIndex(
          (goal) => goal._id === active.id
        );
        const droppedIndex = ongoingTasks.findIndex(
          (goal) => goal._id === over.id
        );
        const reorderedTasks = arrayMove(
          ongoingTasks,
          draggedIndex,
          droppedIndex
        );
        const orderedTasks = reorderedTasks.map((task, index) => ({
          _id: task._id,
          order: index,
        }));
        console.log("Year reordering", orderedTasks);
        onReorder({ orderedTasks });
      }}
    >
      <SortableContext
        items={ongoingTasks.map((goal) => goal._id)}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default DndKitDefault;
