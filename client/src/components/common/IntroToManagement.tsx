import React from "react";

interface propTypes {
  heading: string;
  content: string;
}

const IntroToManagement: React.FC<propTypes> = ({ heading, content }) => {
  return (
    <div style={{ margin: "3% 0px" }}>
      <h1 className="text-3xl font-bold">{heading}</h1>
      <p className="text-justify">{content}</p>
    </div>
  );
};

export default IntroToManagement;
