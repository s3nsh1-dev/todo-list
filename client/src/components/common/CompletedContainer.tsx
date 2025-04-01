import CompletedDivision from "./CompletedDivision";
import type { weeklyGoalsListType } from "../../constants/commonInterfaces";

interface propTypes {
  completedWGoals: weeklyGoalsListType[];
}

const CompletedContainer: React.FC<propTypes> = ({ completedWGoals }) => {
  const renderCompletedWTasks = completedWGoals.map((goal, index) => {
    return (
      <CompletedDivision
        id={goal.id}
        key={goal.id}
        index={index}
        arrLength={completedWGoals.length}
        name={goal.wGoalsName}
      />
    );
  });
  return (
    <div style={{ margin: "10px 0px" }}>
      <h1
        className="text-2xl font-bold text-gray-400"
        style={{ padding: "5px 0px" }}
      >
        Completed Goals
      </h1>
      <div>{renderCompletedWTasks}</div>
    </div>
  );
};

export default CompletedContainer;
