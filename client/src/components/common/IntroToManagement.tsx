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
    <section className="module-intro-card">
      <h1>{heading}</h1>
      <p className={`module-intro-highlight ${color}`}>{subContent}</p>
      <p>{content}</p>
    </section>
  );
};

export default IntroToManagement;
