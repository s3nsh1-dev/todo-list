import { CSSProperties } from "react";

export const addPanelStyle: CSSProperties = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "300px",
  height: "300px",
  color: "black",
  borderRadius: "10px",
  padding: "20px",
  zIndex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};
