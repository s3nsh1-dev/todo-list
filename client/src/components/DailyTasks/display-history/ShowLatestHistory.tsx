import { DividerGray } from "../../others/CommonComponents";
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
    <div className="" style={{ margin: "10px 0px" }}>
      <div className="flex justify-between" style={{ margin: "5px 0px" }}>
        <p className="font-bold">{primary}</p>
        <div className={`${color} w-20 flex justify-center rounded`}>
          {secondary}
        </div>
      </div>
      {index !== arrLength - 1 && <DividerGray />}
    </div>
  );
};

export default ShowLatestHistory;
