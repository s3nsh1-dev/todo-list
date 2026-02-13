import IconButton from "@mui/material/IconButton";
import DarkModeRoundedIcon from "@mui/icons-material/DarkModeRounded";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useTheme } from "../../hook/useTheme";

const ThemeToggle = () => {
  const { mode, toggleTheme } = useTheme();

  return (
    <IconButton
      aria-label="toggle-theme"
      onClick={toggleTheme}
      className="theme-toggle"
      title={mode === "dark" ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mode === "dark" ? (
        <LightModeRoundedIcon sx={{ color: "#f59e0b" }} />
      ) : (
        <DarkModeRoundedIcon sx={{ color: "#334155" }} />
      )}
    </IconButton>
  );
};

export default ThemeToggle;
