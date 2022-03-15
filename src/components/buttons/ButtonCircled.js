import { Button, alpha } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../theme/theme";
import RotatingDashedCirlce from "../RotatingDashedCirlce";

export default function ButtonCircled({children, sx, ...props}) {
  const [hover, setHover] = React.useState(false);

  return (
    <Box
      {...sx}
      position="relative"
      display="inline-flex"
    >
      <Button
        {...props}
        onMouseEnter={_ => setHover(true)}
        onMouseLeave={_ => setHover(false)}
        onTouchStart={_ => setHover(true)}
        onTouchEnd={_ => setHover(false)}
      >
        {children}
      </Button>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          zIndex: -1,
          display: "flex",
          transition: "0.5s all ease-in-out",
          transform: `
            translate(-50%, -50%) 
            ${hover ? "scale(0.5)" : "scale(1)"}
          `,
        }}
      >
        <RotatingDashedCirlce
          animationDuration={hover ? "1.5s" : "10s"}
          size={250}
          strokeWidth={2}
          strokeColor={alpha(theme.palette.info.main, 0.1)}
          strokeDasharray="100 40"
        />
      </Box>
    </Box>
  )
}