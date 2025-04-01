import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import IntroToManagement from "../common/IntroToManagement";
import CompletedContainer from "../common/CompletedContainer";
import OngoingContainer from "../common/OngoingContainer";

const content =
  "The `weeklySlice` manages weekly goals, allowing users to add, remove, and update tasks efficiently. It leverages Immer for immutability, enabling direct state modifications. Goals can be added with a unique ID, removed by filtering, or updated by modifying their name—all while keeping Redux state management seamless and optimized.";

const WeeklyBody = () => {
  const GG = useSelector(
    (state: RootState) => state.weeklyGoals.weeklyGoalsList
  );
  const completedWGoals = GG.filter((goal) => goal.wGoalsStatus === "DONE");
  const ongoingWGoals = GG.filter((goal) => goal.wGoalsStatus === "ONGOING");

  return (
    <>
      <IntroToManagement heading="Introduction" content={content} />
      <CompletedContainer completedWGoals={completedWGoals} />
      <OngoingContainer ongoingWGoals={ongoingWGoals} />
    </>
  );
};

export default WeeklyBody;
