import {
  useDeleteDailyTaskMutation,
  useFetchDailyTasksQuery,
  useReorderDailyTasksMutation,
  useUpdateDailyTaskNameMutation,
  useUpdateDailyTaskStatusMutation,
} from "../../redux/thunks/modelAPI/task/dailyTaskAPI";
import TaskBoardShell from "../v2/tasks/TaskBoardShell";
import TaskSection from "../v2/tasks/TaskSection";
import TaskRow from "../v2/tasks/TaskRow";
import TaskBoardDnd from "../v2/tasks/TaskBoardDnd";
import { dailyTaskAdapter } from "../../constants/taskAdapters";
import { useTaskBoard } from "../../hooks/v2/useTaskBoard";

const DailyTaskManagement = () => {
  const { data, error, isLoading } = useFetchDailyTasksQuery();
  const [reorderDailyTasks] = useReorderDailyTasksMutation();
  const [updateDailyTaskName] = useUpdateDailyTaskNameMutation();
  const [updateDailyTaskStatus] = useUpdateDailyTaskStatusMutation();
  const [deleteDailyTask] = useDeleteDailyTaskMutation();

  const dailyTasksList = data?.body || [];
  const { ongoingTasks, completedTasks } = useTaskBoard(
    dailyTasksList,
    dailyTaskAdapter
  );

  return (
    <TaskBoardShell
      loading={isLoading}
      error={Boolean(error)}
      hasTasks={dailyTasksList.length > 0}
      loadingMessage="Loading daily tasks from the server."
      errorMessage="Daily tasks are unavailable right now."
      emptyMessage="No daily tasks yet. Add your first task to get started."
    >
      <TaskSection
        heading="Ongoing Tasks"
        count={ongoingTasks.length}
        tone="ongoing"
      >
        <TaskBoardDnd
          tasks={ongoingTasks}
          onReorder={(payload) => {
            reorderDailyTasks(payload);
          }}
        >
          {ongoingTasks.map((task) => (
            <TaskRow
              key={task._id}
              id={task._id}
              name={task.taskName}
              completed={false}
              draggable
              onEdit={(newName) => {
                updateDailyTaskName({ _id: task._id, newName });
              }}
              onToggleStatus={() => {
                updateDailyTaskStatus(task._id);
              }}
            />
          ))}
        </TaskBoardDnd>
      </TaskSection>

      <TaskSection
        heading="Completed Tasks"
        count={completedTasks.length}
        tone="completed"
      >
        {completedTasks.map((task) => (
          <TaskRow
            key={task._id}
            id={task._id}
            name={task.taskName}
            completed
            onDelete={() => {
              deleteDailyTask(task._id);
            }}
            onToggleStatus={() => {
              updateDailyTaskStatus(task._id);
            }}
          />
        ))}
      </TaskSection>
    </TaskBoardShell>
  );
};

export default DailyTaskManagement;
