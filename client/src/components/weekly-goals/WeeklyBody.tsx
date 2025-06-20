import CompletedContainer from "../common/CompletedContainer";
import OngoingContainer from "../common/OngoingContainer";
import CompletedDivision from "../common/CompletedDivision";
import OngoingDivision from "../common/OngoingDivision";
import {
  useFetchWeeklyTasksQuery,
  useDeleteWeeklyTaskMutation,
  useUpdateWeeklyTaskStatusMutation,
  useReorderWeeklyTasksMutation,
  useUpdateWeeklyTaskNameMutation,
} from "../../redux/thunks/modelAPI/task/weeklyTaskAPI";
import { weeklyContent as content } from "../../constants/GenericConstants";
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
import IntroToManagement from "../common/IntroToManagement";

const WeeklyBody = () => {
  const [deleteWeeklyTask] = useDeleteWeeklyTaskMutation();
  const [reorderWeeklyTasks] = useReorderWeeklyTasksMutation();
  const [updateWeeklyTaskStatus] = useUpdateWeeklyTaskStatusMutation();
  const [updateWeeklyTaskName] = useUpdateWeeklyTaskNameMutation();

  const { data, error, isLoading } = useFetchWeeklyTasksQuery();
  const sensor = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  if (!data) {
    return <div>....fetching data</div>;
  }
  if (error) return <div>We have error</div>;
  if (isLoading) return <div>....Loading</div>;

  const weeklyTaskArray = data.body;

  const ongoingWGoals = [...weeklyTaskArray].filter(
    (goal) => goal.wGoalsStatus === "ONGOING"
  );
  const completedWGoals = [...weeklyTaskArray].filter(
    (goal) => goal.wGoalsStatus === "DONE"
  );

  const handleStatusUpdate = (taskName: string) => {
    updateWeeklyTaskStatus(taskName);
  };

  const handleDeleteGoal = (_id: string) => {
    deleteWeeklyTask(_id);
  };

  const handleEdittedWeeklyGoalName = ({
    _id,
    newName,
  }: {
    _id: string;
    newName: string;
  }) => {
    updateWeeklyTaskName({ _id, newName });
  };
  console.log("this is weekly data", data.body);

  const renderCompletedWTasks = completedWGoals.map((goal, index) => {
    return (
      <CompletedDivision
        key={goal._id}
        id={goal._id}
        index={index}
        arrLength={completedWGoals.length}
        name={goal.wGoalsName}
        handleDelete={handleDeleteGoal}
        handleStatusUpdate={handleStatusUpdate}
      />
    );
  });
  const renderOngoingWGoals = ongoingWGoals.map((goal, index) => {
    return (
      <OngoingDivision
        key={goal._id}
        id={goal._id}
        name={goal.wGoalsName}
        index={index}
        arrLength={ongoingWGoals.length}
        handleStatus={handleStatusUpdate}
        handleEditGoal={handleEdittedWeeklyGoalName}
      />
    );
  });

  return (
    <>
      <IntroToManagement
        heading="Weekly Tasks"
        content={content}
        color="text-amber-200"
      />
      <CompletedContainer heading="Completed Goals">
        {renderCompletedWTasks}
      </CompletedContainer>
      <DndContext
        sensors={sensor}
        modifiers={[restrictToParentElement]}
        collisionDetection={closestCorners}
        onDragEnd={(e) => {
          const { active, over } = e;
          if (!over) return;
          if (active.id === over.id) return;

          const originalIndex = ongoingWGoals.findIndex(
            (goal) => goal._id === active.id
          );
          const newIndex = ongoingWGoals.findIndex(
            (goal) => goal._id === over.id
          );

          // Create optimistic update also alternate of arrayMove method provided by DNDkit
          if (originalIndex === -1 || newIndex === -1) return;
          const reorderedTasks = [...ongoingWGoals];
          const [movedTask] = reorderedTasks.splice(originalIndex, 1);
          reorderedTasks.splice(newIndex, 0, movedTask);

          const orderedTasks = reorderedTasks.map((task, index) => ({
            _id: task._id,
            order: index,
          }));
          // Trigger the mutation with optimistic update
          reorderWeeklyTasks({ orderedTasks });
        }}
      >
        <SortableContext
          items={ongoingWGoals.map((goal) => goal._id)}
          strategy={verticalListSortingStrategy}
        >
          <OngoingContainer heading="Ongoing Goals">
            {renderOngoingWGoals}
          </OngoingContainer>
        </SortableContext>
      </DndContext>
    </>
  );
};

export default WeeklyBody;

/*

 *Learning of the Component
 when react re-render it does not change the value for state and ref (in Correct words: useRef and useState values
 persist when a re-render is triggered, state value is noted at the first render)
 when u want UI to render after a variable change use state and if only maintain a value with persistence
 across the re-render cycle use Ref

*/
