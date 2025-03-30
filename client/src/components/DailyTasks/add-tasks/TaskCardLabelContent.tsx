import { DividerGray } from "../../others/CommonComponents";
import { FC } from "react";

interface propsTypes {
  userValue: string;
  setUserValue: (value: string) => void;
  heading: string;
  label: string;
}
const TaskCardLabelContent: FC<propsTypes> = ({
  userValue,
  setUserValue,
  heading,
  label,
}) => {
  return (
    <div className="text-gray-300">
      <h1 className="text-center text-2xl font-bold ">{heading}</h1>
      <DividerGray />
      <div style={{ marginTop: "20px" }}>
        <p className="font-bold">{label}</p>
        <input
          className="border border-gray-300 rounded-md p-2 w-full"
          style={{ padding: "10px", margin: "5px 0px" }}
          value={userValue}
          type="text"
          placeholder="e.g., Need to go shopping"
          onChange={(e) => setUserValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TaskCardLabelContent;
