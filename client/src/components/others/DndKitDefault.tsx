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
import { reInitializeYearlyGoals } from "../../redux/slices/yearlyGoalsSlice";
import { useDispatch } from "react-redux";

interface propTypes {
  children: React.ReactNode;
  memoizedGoals: YearlyGoalType[];
  completedGoals: YearlyGoalType[];
}

const DndKitDefault: React.FC<propTypes> = ({
  children,
  memoizedGoals,
  completedGoals,
}) => {
  const dispatch = useDispatch();
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
          (goal) => goal.id === active.id
        );
        const newIndex = memoizedGoals.findIndex((goal) => goal.id === over.id);
        const newlyUpdatedYearlyGoalWithIndex = arrayMove(
          memoizedGoals,
          originalIndex,
          newIndex
        );
        dispatch(
          reInitializeYearlyGoals([
            ...newlyUpdatedYearlyGoalWithIndex,
            ...completedGoals,
          ])
        );
      }}
    >
      <SortableContext
        items={memoizedGoals.map((goal) => goal.id)}
        strategy={verticalListSortingStrategy}
      >
        {children}
      </SortableContext>
    </DndContext>
  );
};

export default DndKitDefault;
