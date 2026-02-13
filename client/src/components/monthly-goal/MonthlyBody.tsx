import IntroToManagement from "../common/IntroToManagement";
import {
  useDeleteMonthlyTaskMutation,
  useFetchMonthlyTasksQuery,
  useReorderMonthlyTasksMutation,
  useUpdateMonthlyTaskNameMutation,
  useUpdateMonthlyTaskStatusMutation,
} from "../../redux/thunks/modelAPI/task/monthlyTaskAPI";
import { monthlyContent as content } from "../../constants/GenericConstants";
import TaskBoardShell from "../v2/tasks/TaskBoardShell";
import TaskSection from "../v2/tasks/TaskSection";
import TaskRow from "../v2/tasks/TaskRow";
import TaskBoardDnd from "../v2/tasks/TaskBoardDnd";
import { monthlyTaskAdapter } from "../../constants/taskAdapters";
import { useTaskBoard } from "../../hooks/v2/useTaskBoard";

const MonthlyBody = () => {
  const [deleteMonthlyTask] = useDeleteMonthlyTaskMutation();
  const [reorderMonthlyTasks] = useReorderMonthlyTasksMutation();
  const [updateMonthlyTaskStatus] = useUpdateMonthlyTaskStatusMutation();
  const [updateMonthlyTaskName] = useUpdateMonthlyTaskNameMutation();
  const { data, error, isLoading } = useFetchMonthlyTasksQuery();

  const monthlyGoalState = data?.body || [];
  const { ongoingTasks, completedTasks } = useTaskBoard(
    monthlyGoalState,
    monthlyTaskAdapter
  );

  return (
    <>
      <IntroToManagement
        heading="Monthly Objectives"
        content={content}
        subContent="Track progress over the month with clear objective ownership."
        color="text-red-600"
      />

      <TaskBoardShell
        loading={isLoading}
        error={Boolean(error)}
        hasTasks={monthlyGoalState.length > 0}
        loadingMessage="Loading monthly goals from the server."
        errorMessage="Monthly goals are unavailable right now."
        emptyMessage="No monthly goals yet. Add your first objective."
      >
        <TaskSection
          heading="Ongoing Goals"
          count={ongoingTasks.length}
          tone="ongoing"
        >
          <TaskBoardDnd
            tasks={ongoingTasks}
            onReorder={(payload) => {
              reorderMonthlyTasks(payload);
            }}
          >
            {ongoingTasks.map((task) => (
              <TaskRow
                key={task._id}
                id={task._id}
                name={task.GoalName}
                completed={false}
                draggable
                onEdit={(newName) => {
                  updateMonthlyTaskName({ _id: task._id, newName });
                }}
                onToggleStatus={() => {
                  updateMonthlyTaskStatus(task._id);
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
              name={task.GoalName}
              completed
              onDelete={() => {
                deleteMonthlyTask(task._id);
              }}
              onToggleStatus={() => {
                updateMonthlyTaskStatus(task._id);
              }}
            />
          ))}
        </TaskSection>
      </TaskBoardShell>
    </>
  );
};

export default MonthlyBody;
