import { colorPalette } from "../../constants/GenericConstants";

const ToDoHeading = () => {
  const Letters: string[] = ["T", "o", "D", "o"];
  const renderTodoLetters: React.ReactNode[] = Letters.map((letter, index) => {
    return (
      <span key={index} className={`${colorPalette[index].color}`}>
        {letter}
      </span>
    );
  });

  const renderColorFullDots: React.ReactNode[] = colorPalette.map((color) => {
    return (
      <span key={color.id} className="todo-heading-dot">
        .
      </span>
    );
  });

  return (
    <>
      {renderTodoLetters}
      {renderColorFullDots}
      <span className="todo-heading-question">?</span>
    </>
  );
};

export default ToDoHeading;
