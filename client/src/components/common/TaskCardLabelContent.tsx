import { DividerGray } from "../others/CommonComponents";
import { FC } from "react";

interface propsTypes {
  userValue: string;
  setUserValue: (value: string) => void;
  heading: string;
  label: string;
  placeholder: string;
}

const TaskCardLabelContent: FC<propsTypes> = ({
  userValue,
  setUserValue,
  heading,
  label,
  placeholder,
}) => {
  return (
    <div className="task-form-content">
      <h1 className="type-display-md task-form-title">{heading}</h1>
      <DividerGray />
      <div className="task-form-field-wrap">
        <p className="task-form-label">{label}</p>
        <input
          className="task-form-input"
          value={userValue}
          type="text"
          placeholder={placeholder}
          onChange={(e) => setUserValue(e.target.value)}
          autoFocus
        />
      </div>
    </div>
  );
};

export default TaskCardLabelContent;
