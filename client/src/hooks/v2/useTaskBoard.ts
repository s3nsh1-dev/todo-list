import { useMemo } from "react";
import type { ReorderPayload, TaskAdapter, TaskWithOrder } from "../../constants/taskAdapters";

export const useTaskBoard = <T extends TaskWithOrder>(
  tasks: T[] | undefined,
  adapter: TaskAdapter<T>
) => {
  return useMemo(() => {
    const source = [...(tasks || [])].sort((a, b) => a.order - b.order);

    return {
      allTasks: source,
      ongoingTasks: source.filter((task) => adapter.getStatus(task) === "ONGOING"),
      completedTasks: source.filter((task) => adapter.getStatus(task) === "DONE"),
    };
  }, [tasks, adapter]);
};

export const createReorderPayload = <T extends TaskWithOrder>(
  tasks: T[],
  activeId: string,
  overId: string
): ReorderPayload | null => {
  const originalIndex = tasks.findIndex((task) => task._id === activeId);
  const newIndex = tasks.findIndex((task) => task._id === overId);

  if (originalIndex === -1 || newIndex === -1) {
    return null;
  }

  const reorderedTasks = [...tasks];
  const [movedTask] = reorderedTasks.splice(originalIndex, 1);
  reorderedTasks.splice(newIndex, 0, movedTask);

  return {
    orderedTasks: reorderedTasks.map((task, index) => ({
      _id: task._id,
      order: index,
    })),
  };
};
