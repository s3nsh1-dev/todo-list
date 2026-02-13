import DailyIntro from "../components/daily-tasks/DailyIntro";
import DailyTopHeader from "../components/daily-tasks/DailyTopHeader";
import DailyTaskManagement from "../components/daily-tasks/DailyTaskManagement";

const DailyTasks = () => {
  return (
    <section className="module-page">
      <DailyTopHeader />
      <div className="module-divider" />
      <section className="mt-3 flex flex-col gap-4">
        <DailyIntro />
        <DailyTaskManagement />
      </section>
    </section>
  );
};

export default DailyTasks;
