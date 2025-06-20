import React from "react";

interface propTypes {
  heading: string;
  content: string;
  color: string;
  subContent: string;
}

const IntroToManagement: React.FC<propTypes> = ({
  heading,
  content,
  color,
  subContent,
}) => {
  return (
    <div className={color} style={{ margin: "3% 0px" }}>
      <h1 className="text-3xl font-bold" style={{ marginBottom: "10px" }}>
        {heading}
      </h1>
      <p className="text-justify">
        <p
          className="font-bold text-orange-300 font-mono"
          style={{ margin: "7px 0px" }}
        >
          {subContent}
        </p>
        {content}
      </p>
    </div>
  );
};

export default IntroToManagement;
