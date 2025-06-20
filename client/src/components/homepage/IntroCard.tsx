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
      title: `Welcome to `,
      content:
        "Stay Organized, Be Productive. One Stop Solution for high performance",
      icon: (
        <CheckCircleOutlineIcon
          fontSize="large"
          sx={{ color: "#4caf50", mb: 2 }}
        />
      ),
    },
    {
      title: "Manage Your Tasks",
      content: "Plan it. Drag it. Complete it. Repeat. Go Tiger",
      icon: (
        <FormatListBulletedIcon
          fontSize="large"
          sx={{ color: "#2196f3", mb: 2 }}
        />
      ),
    },
    {
      title: "Take Notes",
      content:
        "Capture your thoughts and ideas quickly and keep it close to you.  ",
      icon: (
        <StickyNote2Icon fontSize="large" sx={{ color: "#ff9800", mb: 2 }} />
      ),
    },
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  return (
    <Box
      sx={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 400,
        borderRadius: 2,
        boxShadow: 24,
        p: 4,
        outline: "none",
      }}
      className="text-white bg-gray-800"
    >
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: (theme) => theme.palette.grey[500],
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
        <Typography variant="h5" component="h2" fontWeight="bold" mb={2}>
          {steps[currentStep].title}
          {currentStep === 0 ? <ToDoHeading /> : ""}
        </Typography>
        <Typography variant="body1" mb={4}>
          {steps[currentStep].content}
        </Typography>

        {/* Step indicators */}
        <Box display="flex" gap={1} mb={3}>
          {steps.map((_, index) => (
            <Box
              key={index}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: index === currentStep ? "#1976d2" : "#e0e0e0",
              }}
            />
          ))}
        </Box>

        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={handleNext}
          fullWidth
        >
          {currentStep < steps.length - 1 ? "Next" : "Get Started"}
        </Button>
      </Box>
    </Box>
  );
};

export default IntroCard;
