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
      <span key={color.id} className={`${color.color}`}>
        .
      </span>
    );
  });
  return (
    <>
      {renderTodoLetters}
      {renderColorFullDots}
      <span className="text-purple-500">?</span>
    </>
  );
};

export default ToDoHeading;
