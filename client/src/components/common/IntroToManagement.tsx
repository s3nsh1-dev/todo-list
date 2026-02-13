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
    <section className="mb-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h1 className="text-2xl font-bold text-slate-900 sm:text-3xl">{heading}</h1>
      <p className={`mt-3 text-sm font-semibold ${color}`}>{subContent}</p>
      <p className="mt-2 whitespace-pre-line text-sm leading-6 text-slate-600 sm:text-base">
        {content}
      </p>
    </section>
  );
};

export default IntroToManagement;
