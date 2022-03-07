import { Box } from "@mui/system";
import theme from "../theme/theme";

export default function Line({lineWidth, orientation, color, sx}) {

  const getHeight = () => {
    return orientation == "vertical"
      ? lineWidth
      : "100%"
  }

  const getWidth = () => {
    return orientation == "vertical"
      ? "100%"
      : lineWidth
  }

  console.log(getWidth())
  return (
    <Box
      sx={{
        ...sx,
        height: getHeight(),
        width: getWidth(),
        borderRadius: `${lineWidth / 2}px`,
        background: color,
      }}
    />
  )
}

Line.defaultProps = {
  lineWidth: 8,
  orientation: "horizontal",
  color: theme.palette.secondary.main,
}