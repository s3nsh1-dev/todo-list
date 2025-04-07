import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Notes from "./pages/Notes";
import DailyTasks from "./pages/DailyTasks";
import MonthlyGoals from "./pages/MonthlyGoals";
import WeeklyGoals from "./pages/WeeklyGoals";
import YearlyGoals from "./pages/YearlyGoals";
import { useGlobalContext } from "./hook/useGlobalContext";

const App = () => {
  const intoFlag = useGlobalContext();
  console.log("intoFlag", intoFlag);
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
      </Routes>
    </>
  );
};

export default App;
