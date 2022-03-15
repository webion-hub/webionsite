import { shape } from "../theme_impl"
import { spacing } from "../theme_impl/spacing"

const paperStyle = {
  styleOverrides: {
    root: {
      backgroundImage: "none",
      backdropFilter: "blur(16px)",
    },
    rounded: {
      borderRadius: shape.borderRadius * spacing,
    },
  },
}



export default paperStyle