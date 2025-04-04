import { CSSProperties } from "react";

export const addPanelStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  height: "300px",
  borderRadius: "10px",
  padding: "20px",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
export const historyPanelStyle: CSSProperties = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "600px",
  borderRadius: "10px",
  padding: "20px",
  marginRight: "30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
export const notesPanelStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "95vw", // Responsive width
  maxWidth: "800px", // Caps width on large screens
  minWidth: "300px", // Minimum width on smallest screens
  borderRadius: "10px",
  padding: "20px",
  backgroundColor: "#1f2937", // tailwind's gray-800 to match bg
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  fontSize: "1.2rem",
};
