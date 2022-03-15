import { Stack, useMediaQuery } from "@mui/material";
import theme from "../../theme/theme";
import EmptyComponent from "../utils/EmptyComponent";

export default function AppBarSection({children, hideOnMobile, ...props}) {
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

  if (isMobileView && hideOnMobile)
    return <EmptyComponent/>;

  if (props.alignment == "")
    return children;

  return (
    <Stack
      {...props}
      width="100%"
    >
      {children}
    </Stack>
  )
}

AppBarSection.defaultProps = {
  alignment: "",
  hideOnMobile: false,
  direction: "row",
  alignItems: "center",
  spacing: 2,
}