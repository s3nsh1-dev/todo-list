import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/404" element={<PageNotFound />} />
    </Routes>
  );
};

export default App;
