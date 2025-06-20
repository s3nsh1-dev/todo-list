import IntroToManagement from "../common/IntroToManagement";
import CompletedContainer from "../common/CompletedContainer";
import OngoingContainer from "../common/OngoingContainer";
import CompletedDivision from "../common/CompletedDivision";
import OngoingDivision from "../common/OngoingDivision";
import {
  useFetchMonthlyTasksQuery,
  useDeleteMonthlyTaskMutation,
  useReorderMonthlyTasksMutation,
  useUpdateMonthlyTaskStatusMutation,
  useUpdateMonthlyTaskNameMutation,
} from "../../redux/thunks/modelAPI/task/monthlyTaskAPI";
import { monthlyContent as content } from "../../constants/GenericConstants";
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

const MonthlyBody = () => {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );
  const [deleteMonthlyTask] = useDeleteMonthlyTaskMutation();
  const [reorderMonthlyTasks] = useReorderMonthlyTasksMutation();
  const [updateMonthlyTaskStatus] = useUpdateMonthlyTaskStatusMutation();
  const [updateMonthlyTaskName] = useUpdateMonthlyTaskNameMutation();
  const { data, error, isLoading } = useFetchMonthlyTasksQuery();
  if (!data) return <div>...fetching Data</div>;
  if (error) return <div>Server Error</div>;
  if (isLoading) return <div>....Loading</div>;

  const weeklyGoalState = data.body || [];

  //these will reduce the possibility or re-render when there is not change in global status but in local states
  const ongoingWGoals = [...weeklyGoalState].filter(
    (goal) => goal.status === "ONGOING"
  );
  // The cached array does not need manual updates because updating the global state will automatically recreate it
  // hence manual update will be meaning less
  const completedWGoals = [...weeklyGoalState].filter(
    (goal) => goal.status === "DONE"
  );

  const handleStatusUpdate = (_id: string) => {
    updateMonthlyTaskStatus(_id);
  };

  const handleDeleteGoal = (_id: string) => {
    deleteMonthlyTask(_id);
  };

  const handleEdittedMontlyGoalName = ({
    _id,
    newName,
  }: {
    _id: string;
    newName: string;
  }) => {
    updateMonthlyTaskName({ _id, newName });
  };

  const renderCompletedWTasks = completedWGoals.map((goal, index) => {
    return (
      <CompletedDivision
        key={goal._id}
        id={goal._id}
        index={index}
        arrLength={completedWGoals.length}
        name={goal.GoalName}
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
        name={goal.GoalName}
        index={index}
        arrLength={ongoingWGoals.length}
        handleStatus={handleStatusUpdate}
        handleEditGoal={handleEdittedMontlyGoalName}
      />
    );
  });

  return (
    <>
      <IntroToManagement
        heading="Monthly Tasks"
        content={content}
        color="text-red-400"
      />
      <CompletedContainer heading="Completed Goals">
        {renderCompletedWTasks}
      </CompletedContainer>
      <DndContext
        modifiers={[restrictToParentElement]}
        sensors={sensors}
        collisionDetection={closestCorners}
        onDragEnd={(e) => {
          const { active, over } = e;
          if (!over) return;
          if (active.id === over.id) {
            return;
          }
          const originalIndex = ongoingWGoals.findIndex(
            (goal) => goal._id === active.id
          );
          const newIndex = ongoingWGoals.findIndex(
            (goal) => goal._id === over.id
          );

          // Create optimistic update
          if (originalIndex === -1 || newIndex === -1) return;
          const reorderedTasks = [...ongoingWGoals];
          const [movedTask] = reorderedTasks.splice(originalIndex, 1);
          reorderedTasks.splice(newIndex, 0, movedTask);

          const orderedTasks = reorderedTasks.map((task, index) => ({
            _id: task._id,
            order: index,
          }));
          reorderMonthlyTasks({ orderedTasks });
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

export default MonthlyBody;

/*

 *Learning of the Component
 when react re-render it does not change the value for state and ref (in Correct words: useRef and useState values
 persist when a re-render is triggered, state value is noted at the first render)
 when u want UI to render after a variable change use state and if only maintain a value with persistence
 across the re-render cycle use Ref

*/
