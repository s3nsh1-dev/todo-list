import { Box, Typography, Button } from "@mui/material";

const Homepage = () => {
  return (
    <>
      <Box component={"header"}>
        <Typography variant="h3">what ToDo...?</Typography>
      </Box>
      <Box component="main" className="">
        <Box>
          <Button variant="contained" color="primary">
            Daily Tasks
          </Button>
          <Button variant="contained" color="secondary">
            Weekly Goals
          </Button>
          <Button variant="contained" color="warning">
            Monthly Goals
          </Button>
          <Button variant="contained" color="error">
            Year Resolution
          </Button>
        </Box>
        <Box>
          <Button variant="contained" color="success">
            NOTES
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Homepage;
