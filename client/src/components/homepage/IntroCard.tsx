import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ToDoHeading from "../others/ToDoHeading";

interface propTypes {
  onClose: () => void;
}

const IntroCard: React.FC<propTypes> = ({ onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to ",
      content:
        "Plan clearly, execute consistently, and review progress in one focused workspace.",
      icon: (
        <CheckCircleOutlineIcon
          fontSize="large"
          sx={{ color: "#42b883", mb: 2 }}
        />
      ),
    },
    {
      title: "Manage Your Tasks",
      content:
        "Organize goals by timeline, reorder priorities, and keep momentum every day.",
      icon: (
        <FormatListBulletedIcon
          fontSize="large"
          sx={{ color: "#54a6ff", mb: 2 }}
        />
      ),
    },
    {
      title: "Capture Notes",
      content:
        "Save quick ideas and context so decisions stay close to your tasks.",
      icon: (
        <StickyNote2Icon fontSize="large" sx={{ color: "#ffc061", mb: 2 }} />
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep((prev) => prev + 1);
      return;
    }
    onClose();
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        p: 4,
        outline: "none",
      }}
      className="home-intro-card"
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 10,
          top: 10,
          color: "#91a3c5",
        }}
      >
        <CloseIcon />
      </IconButton>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        mt={2}
      >
        {steps[currentStep].icon}
        <Typography variant="h5" component="h2" fontWeight="700" mb={2}>
          {steps[currentStep].title}
          {currentStep === 0 ? <ToDoHeading /> : ""}
        </Typography>
        <Typography variant="body1" mb={4} sx={{ color: "#d6def1" }}>
          {steps[currentStep].content}
        </Typography>

        <Box display="flex" gap={1} mb={3}>
          {steps.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor:
                  index === currentStep ? "#5f9dff" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={handleNext}
          fullWidth
          sx={{
            textTransform: "none",
            fontWeight: 700,
            bgcolor: "#1b6ef3",
            "&:hover": { bgcolor: "#1258cc" },
          }}
        >
          {currentStep < steps.length - 1 ? "Next" : "Get Started"}
        </Button>
      </Box>
    </Box>
  );
};

export default IntroCard;
