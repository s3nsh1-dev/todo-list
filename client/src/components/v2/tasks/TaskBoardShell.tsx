import type { ReactNode } from "react";

interface TaskBoardShellProps {
  loading?: boolean;
  error?: boolean;
  emptyMessage?: string;
  hasTasks: boolean;
  children: ReactNode;
}

const TaskBoardShell: React.FC<TaskBoardShellProps> = ({
  loading,
  error,
  emptyMessage = "No tasks yet",
  hasTasks,
  children,
}) => {
  if (loading) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
        Loading tasks...
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-red-700 shadow-sm">
        Something went wrong while loading tasks.
      </div>
    );
  }

  if (!hasTasks) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-600 shadow-sm">
        {emptyMessage}
      </div>
    );
  }

  return <div className="flex flex-col gap-4">{children}</div>;
};

export default TaskBoardShell;
