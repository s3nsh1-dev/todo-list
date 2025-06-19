import React from "react";

interface propTypes {
  heading: string;
  content: string;
  color: string;
}

const IntroToManagement: React.FC<propTypes> = ({
  heading,
  content,
  color,
}) => {
  return (
    <div className={color} style={{ margin: "3% 0px" }}>
      <h1 className="text-3xl font-bold" style={{ marginBottom: "10px" }}>
        {heading}
      </h1>
      <p className="text-justify ">{content}</p>
    </div>
  );
};

export default IntroToManagement;
