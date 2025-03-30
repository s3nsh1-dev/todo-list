import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

const RedirectToHome = () => {
  return (
    <Link to="/">
      <IconButton>
        <HomeIcon color="primary" />
      </IconButton>
    </Link>
  );
};

export default RedirectToHome;
