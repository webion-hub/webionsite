export const container = {
  backgroundColor: "white",
  display: "flex",
  width: "100vw",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
}
export const leftPart = {
  width: {xs: "80%", lg: "clamp(500px, 48%, 1200px)"},
  overflow: "hidden",
  padding: {xs: "10px", md: "80px"},
  color: "black",
}
export const rightPart = {
  width: "clamp(500px, 52%, 1200px)",
  display: {xs: "none", lg: "inline"},
  alignSelf: "baseline",
}
