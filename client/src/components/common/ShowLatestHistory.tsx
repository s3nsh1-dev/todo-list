import { DividerGray } from "../others/CommonComponents";
import { FC } from "react";

interface propTypes {
  primary: string;
  secondary: string;
  index: number;
  arrLength: number;
  color: string;
}

const ShowLatestHistory: FC<propTypes> = ({
  primary,
  secondary,
  index,
  arrLength,
  color,
}) => {
  return (
    <div className="history-row">
      <div className="history-row-main">
        <p className="type-body-md history-row-primary">{primary}</p>
        <div className={`${color} history-row-status`}>{secondary}</div>
      </div>
      {index !== arrLength - 1 && <DividerGray />}
    </div>
  );
};

export default ShowLatestHistory;
