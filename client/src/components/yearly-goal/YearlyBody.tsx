import IntroToManagement from "../common/IntroToManagement";
import CompletedContainer from "../common/CompletedContainer";
import OngoingContainer from "../common/OngoingContainer";
import CompletedDivision from "../common/CompletedDivision";
import OngoingDivision from "../common/OngoingDivision";
import {
  useFetchYearlyTaskQuery,
  useDeleteYearlyTaskMutation,
  useUpdateYearlyTaskStatusMutation,
  useUpdateYearlyTaskNameMutation,
  useReorderYearlyTasksMutation,
} from "../../redux/thunks/modelAPI/task/yearlyTaskAPI";
import { yearlyContent as content } from "../../constants/GenericConstants";
import DndKitDefault from "../others/DndKitDefault";

const YearlyBody = () => {
  const { data, error, isLoading } = useFetchYearlyTaskQuery();
  const [deleteYearlyTask] = useDeleteYearlyTaskMutation();
  const [updateYearlyTaskName] = useUpdateYearlyTaskNameMutation();
  const [updateYearlyTaskStatus] = useUpdateYearlyTaskStatusMutation();
  const [reorderYearlyTasks] = useReorderYearlyTasksMutation();

  if (!data) return <div>....fetching Data</div>;
  if (error) return <div>Server Error</div>;
  if (isLoading) return <div>....Loading</div>;

  const GG = data.body || [];

  //these will reduce the possibility or re-render when there is not change in global status but in local states
  const ongoingYGoals = [...GG].filter((goal) => goal.status === "ONGOING");

  const completedYGoals = [...GG].filter((goal) => goal.status === "DONE");

  const handleStatusUpdate = (_id: string) => {
    updateYearlyTaskStatus(_id);
  };

  const handleDeleteGoal = (_id: string) => {
    deleteYearlyTask(_id);
  };

  const handleEdittedYearlyGoalsName = ({
    _id,
    newName,
  }: {
    _id: string;
    newName: string;
  }) => {
    updateYearlyTaskName({ _id, newName });
  };

  const renderCompletedWTasks = completedYGoals.map((goal, index) => {
    return (
      <CompletedDivision
        key={goal._id}
        id={goal._id}
        index={index}
        arrLength={completedYGoals.length}
        name={goal.yearlyGoalName}
        handleDelete={handleDeleteGoal}
        handleStatusUpdate={handleStatusUpdate}
      />
    );
  });
  const renderOngoingWGoals = ongoingYGoals.map((goal, index) => {
    return (
      <OngoingDivision
        key={goal._id}
        id={goal._id}
        name={goal.yearlyGoalName}
        index={index}
        arrLength={ongoingYGoals.length}
        handleStatus={handleStatusUpdate}
        handleEditGoal={handleEdittedYearlyGoalsName}
      />
    );
  });

  return (
    <>
      <IntroToManagement
        heading="Yearly Goals"
        content={content}
        color="text-green-400"
      />
      <CompletedContainer heading="Completed">
        {renderCompletedWTasks}
      </CompletedContainer>
      <DndKitDefault
        ongoingTasks={ongoingYGoals}
        onReorder={reorderYearlyTasks}
      >
        <OngoingContainer heading="Ongoing">
          {renderOngoingWGoals}
        </OngoingContainer>
      </DndKitDefault>
    </>
  );
};

export default YearlyBody;

/*

 *Learning of the Component
 when react re-render it does not change the value for state and ref (in Correct words: useRef and useState values
 persist when a re-render is triggered, state value is noted at the first render)
 when u want UI to render after a variable change use state and if only maintain a value with persistence
 across the re-render cycle use Ref

*/
