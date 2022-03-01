import { shape } from "../theme_impl";

const paperStyle = {
  styleOverrides: {
    root: {
      backgroundImage: "none",
      backdropFilter: "blur(64px)",
    },
    rounded: {
      border: shape.border.main,
      borderRadius: 16,
    },
  },
}



export default paperStyle