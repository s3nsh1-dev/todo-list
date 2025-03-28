import { DividerGray } from "../../others/CommonComponents";
import { FC } from "react";
import type { historyLogType } from "../../../constants/commonInterfaces";
interface propTypes {
  tasks: historyLogType;
  index: number;
  arrLength: number;
  color: string;
}
const ShowLatestHistory: FC<propTypes> = ({
  tasks,
  index,
  arrLength,
  color,
}) => {
  return (
    <div key={tasks.histId} className="" style={{ margin: "10px 0px" }}>
      <div className="flex justify-between" style={{ margin: "5px 0px" }}>
        <p className="font-bold">{tasks.histDate}</p>
        <div className={`${color} w-20 flex justify-center rounded`}>
          {tasks.histResult}
        </div>
      </div>
      {index !== arrLength - 1 && <DividerGray />}
    </div>
  );
};

export default ShowLatestHistory;
