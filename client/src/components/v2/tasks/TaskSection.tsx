interface TaskSectionProps {
  heading: string;
  count: number;
  tone: "ongoing" | "completed";
  children: React.ReactNode;
}

const toneClasses: Record<TaskSectionProps["tone"], string> = {
  ongoing: "task-section task-section-ongoing",
  completed: "task-section task-section-completed",
};

const badgeClasses: Record<TaskSectionProps["tone"], string> = {
  ongoing: "task-section-badge task-section-badge-ongoing",
  completed: "task-section-badge task-section-badge-completed",
};

const TaskSection: React.FC<TaskSectionProps> = ({
  heading,
  count,
  tone,
  children,
}) => {
  return (
    <section className={toneClasses[tone]}>
      <header className="mb-3 flex items-center justify-between">
        <h2 className="text-xl font-bold">{heading}</h2>
        <span className={badgeClasses[tone]}>{count}</span>
      </header>
      <div className="divide-y divide-slate-300/40">{children}</div>
    </section>
  );
};

export default TaskSection;
