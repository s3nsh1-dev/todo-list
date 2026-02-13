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
        "Keep planning and execution in one reliable space with clean workflows.",
      icon: (
        <CheckCircleOutlineIcon
          fontSize="large"
          sx={{ color: "#4f8ef8", mb: 2 }}
        />
      ),
    },
    {
      title: "Task Management",
      content:
        "Organize tasks by timeline, update priorities, and track completion with clarity.",
      icon: (
        <FormatListBulletedIcon
          fontSize="large"
          sx={{ color: "#2f9d74", mb: 2 }}
        />
      ),
    },
    {
      title: "Notes",
      content:
        "Store contextual notes and keep important details close to your work.",
      icon: (
        <StickyNote2Icon fontSize="large" sx={{ color: "#d09028", mb: 2 }} />
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
          color: "var(--muted)",
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
        <Typography variant="body1" mb={4} sx={{ color: "var(--muted)" }}>
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
                  index === currentStep
                    ? "var(--accent)"
                    : "color-mix(in oklab, var(--muted) 35%, transparent)",
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
            bgcolor: "var(--accent)",
            "&:hover": { bgcolor: "var(--accent-hover)" },
          }}
        >
          {currentStep < steps.length - 1 ? "Next" : "Get Started"}
        </Button>
      </Box>
    </Box>
  );
};

export default IntroCard;
