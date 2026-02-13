import IntroToManagement from "../common/IntroToManagement";
import {
  useDeleteYearlyTaskMutation,
  useFetchYearlyTaskQuery,
  useReorderYearlyTasksMutation,
  useUpdateYearlyTaskNameMutation,
  useUpdateYearlyTaskStatusMutation,
} from "../../redux/thunks/modelAPI/task/yearlyTaskAPI";
import { yearlyContent as content } from "../../constants/GenericConstants";
import TaskBoardShell from "../v2/tasks/TaskBoardShell";
import TaskSection from "../v2/tasks/TaskSection";
import TaskRow from "../v2/tasks/TaskRow";
import TaskBoardDnd from "../v2/tasks/TaskBoardDnd";
import { yearlyTaskAdapter } from "../../constants/taskAdapters";
import { useTaskBoard } from "../../hooks/v2/useTaskBoard";

const YearlyBody = () => {
  const { data, error, isLoading } = useFetchYearlyTaskQuery();
  const [deleteYearlyTask] = useDeleteYearlyTaskMutation();
  const [updateYearlyTaskName] = useUpdateYearlyTaskNameMutation();
  const [updateYearlyTaskStatus] = useUpdateYearlyTaskStatusMutation();
  const [reorderYearlyTasks] = useReorderYearlyTasksMutation();

  const yearlyGoals = data?.body || [];
  const { ongoingTasks, completedTasks } = useTaskBoard(
    yearlyGoals,
    yearlyTaskAdapter
  );

  return (
    <>
      <IntroToManagement
        heading="Yearly Strategy"
        content={content}
        subContent="Manage long-term targets through measurable yearly milestones."
        color="text-emerald-600"
      />

      <TaskBoardShell
        loading={isLoading}
        error={Boolean(error)}
        hasTasks={yearlyGoals.length > 0}
        loadingMessage="Loading yearly strategy items."
        errorMessage="Yearly task service is currently unavailable."
        emptyMessage="No yearly strategy items yet. Add your first target."
      >
        <TaskSection
          heading="Ongoing Goals"
          count={ongoingTasks.length}
          tone="ongoing"
        >
          <TaskBoardDnd
            tasks={ongoingTasks}
            onReorder={(payload) => {
              reorderYearlyTasks(payload);
            }}
          >
            {ongoingTasks.map((task) => (
              <TaskRow
                key={task._id}
                id={task._id}
                name={task.yearlyGoalName}
                completed={false}
                draggable
                onEdit={(newName) => {
                  updateYearlyTaskName({ _id: task._id, newName });
                }}
                onToggleStatus={() => {
                  updateYearlyTaskStatus(task._id);
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
              name={task.yearlyGoalName}
              completed
              onDelete={() => {
                deleteYearlyTask(task._id);
              }}
              onToggleStatus={() => {
                updateYearlyTaskStatus(task._id);
              }}
            />
          ))}
        </TaskSection>
      </TaskBoardShell>
    </>
  );
};

export default YearlyBody;
