import {
  useDeleteWeeklyTaskMutation,
  useFetchWeeklyTasksQuery,
  useReorderWeeklyTasksMutation,
  useUpdateWeeklyTaskNameMutation,
  useUpdateWeeklyTaskStatusMutation,
} from "../../redux/thunks/modelAPI/task/weeklyTaskAPI";
import { weeklyContent as content } from "../../constants/GenericConstants";
import IntroToManagement from "../common/IntroToManagement";
import TaskBoardShell from "../v2/tasks/TaskBoardShell";
import TaskSection from "../v2/tasks/TaskSection";
import TaskRow from "../v2/tasks/TaskRow";
import TaskBoardDnd from "../v2/tasks/TaskBoardDnd";
import { weeklyTaskAdapter } from "../../constants/taskAdapters";
import { useTaskBoard } from "../../hooks/v2/useTaskBoard";

const WeeklyBody = () => {
  const [deleteWeeklyTask] = useDeleteWeeklyTaskMutation();
  const [reorderWeeklyTasks] = useReorderWeeklyTasksMutation();
  const [updateWeeklyTaskStatus] = useUpdateWeeklyTaskStatusMutation();
  const [updateWeeklyTaskName] = useUpdateWeeklyTaskNameMutation();
  const { data, error, isLoading } = useFetchWeeklyTasksQuery();

  const weeklyTaskArray = data?.body || [];
  const { ongoingTasks, completedTasks } = useTaskBoard(
    weeklyTaskArray,
    weeklyTaskAdapter
  );

  return (
    <>
      <IntroToManagement
        heading="Weekly Tasks"
        subContent="Set priorities for the week and adjust quickly."
        content={content}
        color="text-amber-500"
      />

      <TaskBoardShell
        loading={isLoading}
        error={Boolean(error)}
        hasTasks={weeklyTaskArray.length > 0}
        emptyMessage="No weekly goals yet. Add one to start planning."
      >
        <TaskSection
          heading="Ongoing Goals"
          count={ongoingTasks.length}
          tone="ongoing"
        >
          <TaskBoardDnd
            tasks={ongoingTasks}
            onReorder={(payload) => {
              reorderWeeklyTasks(payload);
            }}
          >
            {ongoingTasks.map((task) => (
              <TaskRow
                key={task._id}
                id={task._id}
                name={task.wGoalsName}
                completed={false}
                draggable
                onEdit={(newName) => {
                  updateWeeklyTaskName({ _id: task._id, newName });
                }}
                onToggleStatus={() => {
                  updateWeeklyTaskStatus(task._id);
                }}
              />
            ))}
          </TaskBoardDnd>
        </TaskSection>

        <TaskSection
          heading="Completed Goals"
          count={completedTasks.length}
          tone="completed"
        >
          {completedTasks.map((task) => (
            <TaskRow
              key={task._id}
              id={task._id}
              name={task.wGoalsName}
              completed
              onDelete={() => {
                deleteWeeklyTask(task._id);
              }}
              onToggleStatus={() => {
                updateWeeklyTaskStatus(task._id);
              }}
            />
          ))}
        </TaskSection>
      </TaskBoardShell>
    </>
  );
};

export default WeeklyBody;
