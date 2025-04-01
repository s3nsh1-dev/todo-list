import WeeklyHeader from "../components/weekly-goals/WeeklyHeader";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import IntroToManagement from "../components/common/IntroToManagement";
import OngoingDivision from "../components/common/OngoingDivision";
import CompletedDivision from "../components/common/CompletedDivision";
import CompletedContainer from "../components/common/CompletedContainer";
import OngoingContainer from "../components/common/OngoingContainer";

const content =
  "The `weeklySlice` manages weekly goals, allowing users to add, remove, and update tasks efficiently. It leverages Immer for immutability, enabling direct state modifications. Goals can be added with a unique ID, removed by filtering, or updated by modifying their name—all while keeping Redux state management seamless and optimized.";

const WeeklyGoals = () => {
  const GG = useSelector(
    (state: RootState) => state.weeklyGoals.weeklyGoalsList
  );
  const completedWGoals = GG.filter((goal) => goal.wGoalsStatus === "DONE");
  const ongoingWGoals = GG.filter((goal) => goal.wGoalsStatus === "ONGOING");

  const renderOngoingWGoals = ongoingWGoals.map((goal, index) => {
    return (
      <OngoingDivision
        key={goal.id}
        name={goal.wGoalsName}
        index={index}
        arrLength={ongoingWGoals.length}
      />
    );
  });

  const renderCompletedWTasks = completedWGoals.map((goal, index) => {
    return (
      <CompletedDivision
        key={goal.id}
        index={index}
        arrLength={completedWGoals.length}
        name={goal.wGoalsName}
      />
    );
  });

  return (
    <div className="" style={{ margin: "0px 7%" }}>
      <WeeklyHeader />
      <IntroToManagement heading="Introduction" content={content} />
      <CompletedContainer>{renderCompletedWTasks}</CompletedContainer>
      <OngoingContainer>{renderOngoingWGoals}</OngoingContainer>
    </div>
  );
};

export default WeeklyGoals;
