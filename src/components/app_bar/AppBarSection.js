import { Stack, useMediaQuery } from "@mui/material";
import theme from "../../theme/theme";
import EmptyComponent from "../EmptyComponent";

// eslint-disable-next-line no-unused-vars
export default function AppBarSection({children, sectionAlignment, hideOnMobile, ...props}) {
  const isMobileView = useMediaQuery(theme.breakpoints.down('sm'))

  if (isMobileView && hideOnMobile)
    return <EmptyComponent/>;

  return (
    <Stack
      {...props}
    >
      {children}
    </Stack>
  )
}

AppBarSection.defaultProps = {
  sectionAlignment: "start",
  hideOnMobile: false,
  direction: "row",
  alignItems: "center",
  spacing: 2,
}