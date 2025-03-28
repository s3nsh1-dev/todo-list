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
