import React from "react";

interface propTypes {
  children: React.ReactNode;
}

const CompletedContainer: React.FC<propTypes> = ({ children }) => {
  return (
    <div style={{ margin: "10px 0px" }}>
      <h1
        className="text-2xl font-bold text-gray-400"
        style={{ padding: "5px 0px" }}
      >
        Completed Goals
      </h1>
      <div>{children}</div>
    </div>
  );
};

export default CompletedContainer;
