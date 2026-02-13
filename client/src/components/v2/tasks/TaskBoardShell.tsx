import type { ReactNode } from "react";

interface TaskBoardShellProps {
  loading?: boolean;
  error?: boolean;
  emptyMessage?: string;
  errorMessage?: string;
  loadingMessage?: string;
  hasTasks: boolean;
  children: ReactNode;
}

const TaskBoardShell: React.FC<TaskBoardShellProps> = ({
  loading,
  error,
  emptyMessage = "No tasks available.",
  errorMessage = "Unable to load tasks at the moment. Please try again shortly.",
  loadingMessage = "Loading task data...",
  hasTasks,
  children,
}) => {
  const showLoadingState = Boolean(loading) && !hasTasks && !error;
  const showErrorState = Boolean(error) && !hasTasks;

  if (showLoadingState) {
    return (
      <div className="task-status-card">
        <h3 className="type-display-sm">Loading</h3>
        <p className="type-body-md">{loadingMessage}</p>
      </div>
    );
  }

  if (showErrorState) {
    return (
      <div className="task-status-card task-status-error">
        <h3 className="type-display-sm">Service Unavailable</h3>
        <p className="type-body-md">{errorMessage}</p>
      </div>
    );
  }

  if (!hasTasks) {
    return (
      <div className="task-status-card task-status-empty">
        <h3 className="type-display-sm">No Records</h3>
        <p className="type-body-md">{emptyMessage}</p>
      </div>
    );
  }

  return <div className="flex flex-col gap-4">{children}</div>;
};

export default TaskBoardShell;
