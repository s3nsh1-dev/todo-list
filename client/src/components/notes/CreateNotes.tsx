import { TextareaAutosize, Box, Button } from "@mui/material";

const CreateNotes = () => {
  return (
    <Box
      sx={{
        mx: "auto",
        mt: 4,
        p: 2,
        display: "flex",
        flexDirection: "column",
        gap: 2,
        border: "2px solid #e0e0e0",
        borderRadius: 2,
        boxShadow: 2,
        fontSize: "1.2rem",
      }}
    >
      <TextareaAutosize
        placeholder="Enter Title"
        style={{
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontWeight: "bold",
        }}
      />
      <TextareaAutosize
        aria-label="Note Content"
        minRows={14}
        placeholder="Write your note here..."
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontFamily: "inherit",
        }}
      />
      <div className="flex gap-3">
        <Button variant="outlined" color="warning" sx={{ fontWeight: "bold" }}>
          Cancel
        </Button>
        <Button variant="outlined" color="success" sx={{ fontWeight: "bold" }}>
          Save
        </Button>
        <Button variant="outlined" color="primary" sx={{ fontWeight: "bold" }}>
          Copy
        </Button>
      </div>
    </Box>
  );
};

export default CreateNotes;
