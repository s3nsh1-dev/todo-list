import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Notes from "./pages/Notes";
import DailyTasks from "./pages/DailyTasks";
import MonthlyGoals from "./pages/MonthlyGoals";
import WeeklyGoals from "./pages/WeeklyGoals";
import YearlyGoals from "./pages/YearlyGoals";
import Test from "./Test/Test";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/daily-tasks" element={<DailyTasks />} />
        <Route path="/weekly-goals" element={<WeeklyGoals />} />
        <Route path="/monthly-goals" element={<MonthlyGoals />} />
        <Route path="/yearly-goals" element={<YearlyGoals />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </>
  );
};

export default App;
