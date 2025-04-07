import React from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import ShowOngoingTasks from "./ShowOngoingTasks";
import ShowCompletedTasks from "./ShowCompletedTasks";
import { closestCorners, DndContext } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { replaceTasksWithNewValue } from "../../redux/slices/dailyTasksSlice";

const DailyTaskManagement = () => {
  const dispatch = useDispatch();
  const dailyTasksList = useSelector(
    (state: RootState) => state.dailyTasks.taskDetails
  );

  const taskName = React.useMemo(
    () => ({
      completedTasks: dailyTasksList.filter((tasks) => tasks.status === "DONE"),
      ongoingTasks: dailyTasksList.filter(
        (tasks) => tasks.status === "ONGOING"
      ),
    }),
    [dailyTasksList]
  );

  const renderOngoingTasks = taskName.ongoingTasks.map((tasks, index) => {
    return (
      <ShowOngoingTasks
        key={tasks.taskId}
        tasks={tasks}
        index={index}
        arrLength={taskName.ongoingTasks.length}
      />
    );
  });

  const renderCompletedTasks = taskName.completedTasks.map((tasks, index) => {
    return (
      <ShowCompletedTasks
        key={tasks.taskId}
        tasks={tasks}
        index={index}
        arrLength={taskName.completedTasks.length}
      />
    );
  });

  return (
    <article className="flex flex-col gap-5">
      <div>
        <h1 className="text-xl font-bold text-gray-400">Completed</h1>
        <div className="text-gray-500">{renderCompletedTasks}</div>
      </div>
      <div>
        <h1 className="text-xl font-bold">Ongoing</h1>
        <DndContext
          collisionDetection={closestCorners}
          onDragEnd={(e) => {
            const { active, over } = e;
            if (!over) return;
            if (active.id === over.id) {
              return;
            }
            const originalIndex = taskName.ongoingTasks.findIndex(
              (task) => task.taskId === active.id
            );
            const newIndex = taskName.ongoingTasks.findIndex(
              (task) => task.taskId === over.id
            );
            const updatedTasks = arrayMove(
              taskName.ongoingTasks,
              originalIndex,
              newIndex
            );
            dispatch(
              replaceTasksWithNewValue([
                ...updatedTasks,
                ...taskName.completedTasks,
              ])
            );
          }}
        >
          <SortableContext
            items={taskName["ongoingTasks"].map((task) => task.taskId)}
            strategy={verticalListSortingStrategy}
          >
            {renderOngoingTasks}
          </SortableContext>
        </DndContext>
      </div>
    </article>
  );
};

export default DailyTaskManagement;
