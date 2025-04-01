import OngoingDivision from "./OngoingDivision";
import type { weeklyGoalsListType } from "../../constants/commonInterfaces";

interface propType {
  ongoingWGoals: weeklyGoalsListType[];
}

const OngoingContainer: React.FC<propType> = ({ ongoingWGoals }) => {
  const renderOngoingWGoals = ongoingWGoals.map((goal, index) => {
    return (
      <OngoingDivision
        id={goal.id}
        key={goal.id}
        name={goal.wGoalsName}
        index={index}
        arrLength={ongoingWGoals.length}
      />
    );
  });
  return (
    <div style={{ margin: "10px 0px" }}>
      <h1 className="text-2xl font-bold" style={{ padding: "5px 0px" }}>
        Ongoing Goals
      </h1>
      <div>{renderOngoingWGoals}</div>
    </div>
  );
};

export default OngoingContainer;
