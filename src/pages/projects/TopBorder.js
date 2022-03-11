import * as React from "react"
import { PathSvg, Svg } from "../../components/SvgComponents"
import theme from "../../theme/theme"

const TopBorder = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    viewBox="0 0 270.933 67.733"
    preserveAspectRatio="none"
    display="block"
    {...props}
  >
    <PathSvg
      sx={{
        fill: theme.palette.background.default,
        stroke: "none",
        strokeWidth: ".264583px",
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeOpacity: 1,
      }}
      d="M0 0v67.733h270.933C104.728 67.476 16.6 61.96 0 0Z"
    />
  </Svg>
)

export default TopBorder