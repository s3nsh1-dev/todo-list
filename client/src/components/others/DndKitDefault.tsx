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
  memoizedGoals: YearlyGoalType[];
  onReorder: (orderedGoals: YearlyGoalType[]) => void;
}

const DndKitDefault: React.FC<propTypes> = ({
  children,
  memoizedGoals,
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
        const originalIndex = memoizedGoals.findIndex(
          (goal) => goal._id === active.id
        );
        const newIndex = memoizedGoals.findIndex(
          (goal) => goal._id === over.id
        );
        const newlyUpdatedGoals = arrayMove(
          memoizedGoals,
          originalIndex,
          newIndex
        );
        onReorder(newlyUpdatedGoals);
      }}
    >
      <SortableContext
        items={memoizedGoals.map((goal) => goal._id)}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default DndKitDefault;
