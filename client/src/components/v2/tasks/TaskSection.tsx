interface TaskSectionProps {
  heading: string;
  count: number;
  tone: "ongoing" | "completed";
  children: React.ReactNode;
}

const toneClasses: Record<TaskSectionProps["tone"], string> = {
  ongoing: "border-blue-100 bg-white",
  completed: "border-slate-200 bg-slate-50",
};

const badgeClasses: Record<TaskSectionProps["tone"], string> = {
  ongoing: "bg-blue-100 text-blue-700",
  completed: "bg-slate-200 text-slate-700",
};

const TaskSection: React.FC<TaskSectionProps> = ({
  heading,
  count,
  tone,
  children,
}) => {
  return (
    <section className={`rounded-2xl border p-4 shadow-sm ${toneClasses[tone]}`}>
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold text-slate-800">{heading}</h2>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${badgeClasses[tone]}`}>
          {count}
        </span>
      </header>
      <div className="divide-y divide-slate-200">{children}</div>
    </section>
  );
};

export default TaskSection;
