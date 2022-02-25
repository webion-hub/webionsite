import { shape } from "../theme_impl";

const paperStyle = {
  styleOverrides: {
    root: {
      backgroundImage: "none",
    },
    rounded: {
      border: shape.border.main,
      borderRadius: 28,
    },
  },
}



export default paperStyle