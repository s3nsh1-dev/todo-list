interface propTypes {
  heading: string;
  children: React.ReactNode;
}

const CompletedContainer: React.FC<propTypes> = ({ heading, children }) => {
  return (
    <section className="rounded-2xl border border-slate-200 bg-slate-50 p-4 shadow-sm">
      <h2 className="mb-2 text-xl font-bold text-slate-700">{heading}</h2>
      <div className="divide-y divide-slate-200">{children}</div>
    </section>
  );
};

export default CompletedContainer;
