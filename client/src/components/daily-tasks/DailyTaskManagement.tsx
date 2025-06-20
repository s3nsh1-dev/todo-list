import ShowOngoingTasks from "./ShowOngoingTasks";
import ShowCompletedTasks from "./ShowCompletedTasks";
import {
  useFetchDailyTasksQuery,
  useReorderDailyTasksMutation,
} from "../../redux/thunks/modelAPI/task/dailyTaskAPI";
import {
  closestCorners,
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  // arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { taskDetails } from "../../constants/sliceDataset";

const DailyTaskManagement = () => {
  const { data, error, isLoading } = useFetchDailyTasksQuery();
  const [reorderDailyTasks] = useReorderDailyTasksMutation();

  const sensor = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (!data) {
    return <div>Do not have any task</div>;
  }

  const dailyTasksList = data?.body || taskDetails;

  const ongoingTasks = dailyTasksList.filter(
    (task) => task.status === "ONGOING"
  );
  const completedTasks = dailyTasksList.filter(
    (task) => task.status === "DONE"
  );

  if (error) return <div>We have error</div>;
  if (isLoading) return <div>....Loading</div>;

  const renderOngoingTasks = ongoingTasks.map((tasks, index) => {
    return (
      <ShowOngoingTasks
        key={tasks._id}
        tasks={tasks}
        index={index}
        arrLength={ongoingTasks.length}
      />
    );
  });

  const renderCompletedTasks = completedTasks.map((tasks, index) => {
    return (
      <ShowCompletedTasks
        key={tasks._id}
        tasks={tasks}
        index={index}
        arrLength={completedTasks.length}
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
          sensors={sensor}
          modifiers={[restrictToParentElement]}
          collisionDetection={closestCorners}
          onDragEnd={(e) => {
            const { active, over } = e;
            if (!over) return;
            if (active.id === over.id) return;

            const originalIndex = ongoingTasks.findIndex(
              (task) => task._id === active.id
            );
            const newIndex = ongoingTasks.findIndex(
              (task) => task._id === over.id
            );

            if (originalIndex === -1 || newIndex === -1) return;

            // Create optimistic update
            const reorderedTasks = [...ongoingTasks];
            const [movedTask] = reorderedTasks.splice(originalIndex, 1);
            reorderedTasks.splice(newIndex, 0, movedTask);

            const orderedTasks = reorderedTasks.map((task, index) => ({
              _id: task._id,
              order: index,
            }));

            // Trigger the mutation with optimistic update
            reorderDailyTasks({ orderedTasks });
          }}
        >
          <SortableContext
            items={ongoingTasks.map((task) => task._id)}
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
