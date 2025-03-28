import { DividerGray } from "../../others/CommonComponents";
import { FC } from "react";

interface propsTypes {
  userValue: string;
  setUserValue: (value: string) => void;
}
const AddTaskContent: FC<propsTypes> = ({ userValue, setUserValue }) => {
  return (
    <div id="add-dailyTaskName" className="text-gray-300">
      <h1 className="text-center text-2xl font-bold ">Add New Task</h1>
      <DividerGray />
      <div style={{ marginTop: "20px" }}>
        <p className="font-bold">Task Name</p>
        <input
          className="border border-gray-300 rounded-md p-2 w-full"
          style={{ padding: "10px", margin: "5px 0px" }}
          value={userValue}
          type="text"
          id="add-dailyTaskName"
          placeholder="e.g., Need to go shopping"
          onChange={(e) => setUserValue(e.target.value)}
        />
      </div>
    </div>
  );
};

export default AddTaskContent;
