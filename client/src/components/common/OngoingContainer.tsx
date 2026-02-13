interface propType {
  children: React.ReactNode;
  heading: string;
}

const OngoingContainer: React.FC<propType> = ({ heading, children }) => {
  return (
    <section className="rounded-2xl border border-blue-100 bg-white p-4 shadow-sm">
      <h2 className="mb-2 text-xl font-bold text-slate-900">{heading}</h2>
      <div className="divide-y divide-slate-200">{children}</div>
    </section>
  );
};

export default OngoingContainer;
