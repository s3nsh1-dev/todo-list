import HistoryIcon from "@mui/icons-material/History";
import AddTaskIcon from "@mui/icons-material/AddTask";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import { todayDate } from "../../constants/GenericConstants";

const DailyTopHeader = () => {
  return (
    <section id="daily-title-bar" className="flex justify-between">
      <h1 className="flex items-center font-bold">{todayDate}</h1>
      <div>
        <Link to="/">
          <IconButton aria-label="edit-daily-tasks">
            <HomeIcon color="primary" />
          </IconButton>
        </Link>
        <IconButton aria-label="daily-tasks-history">
          <HistoryIcon color="error" />
        </IconButton>
        <IconButton aria-label="add-more-tasks">
          <AddTaskIcon color="success" />
        </IconButton>
      </div>
    </section>
  );
};

export default DailyTopHeader;
