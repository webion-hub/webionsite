import { Typography, useMediaQuery } from "@mui/material";
import { alpha } from "@mui/material";
import { Box } from "@mui/system";
import ButtonCircled from "../../components/buttons/ButtonCircled";
import { Worker } from "../../components/illustrations/illustrations";
import Page from "../../components/Page";
import theme from "../../theme/theme";
import "./styles/square.css"

export default function Home() {
  const isMd = useMediaQuery(theme.breakpoints.down('md'))
  const isSm = useMediaQuery(theme.breakpoints.down('sm'))

  const getSlideAnimation = (time) => {
    return {
      animation: `slide 1s ease-in-out forwards`,
      animationDelay: `${time / 10}s`,
    }
  }

  const getAnimation = () => {
    return {
      animation: `flicker ${Math.random() + 2}s ease-in-out alternate infinite`,
      animationDelay: `-${Math.random()*4}s`,
    }
  }

  const getTextColumn = (x, height) => {
    const y = 18

    return (
      <text
        style={{
          transform: "translate(0, -100%)",
          ...getSlideAnimation((x - 6)/14),
          fontSize: 18,
        }}
        x={x}
        y={y}
        textAnchor="middle"
      >
        {
          [...Array(height)].map((_, i) => (
            <tspan
              key={i}
              style={{
                ...getAnimation(),
                fontSize: "18px",
                fontFamily: 'Roboto Slab',
                fill: "#0cca4a",
              }}
              x={x}
              y={y * (i + 1)}
            >
              {Math.random() > .5 ? 1 : 0}
            </tspan>
          ))
        }
      </text>
    )


  }

  return (
    <Page
      justifyContent="center"
      sx={{
        minHeight: "90vh",
      }}
    >
      <Box
        sx={{
          margin: "0 auto",
          backdropFilter: "blur(16px)",
          background: alpha(theme.palette.primary.main, 0.05),
          padding: 4,
          borderRadius: isSm ? 0 : theme.shape.borderRadius,
          width: isSm ? "100%" : "auto",
        }}
      >
        <Typography
          variant={isMd ? "h5" : "h4"}
          component="h1"
          align={isMd ? "center" : "left"}
        >
          <strong>Webion,</strong>
        </Typography>
        <Typography
          variant={isMd ? "h4" : "h2"}
          component="h1"
          align={isMd ? "center" : "left"}
        >
          gli artigiani del software
        </Typography>
        <ButtonCircled
          variant="contained"
          sx={{
            marginTop: 4,
            marginInline: "auto",
          }}
        >
         Scopri perchè
        </ButtonCircled>
      </Box>
      <svg
        style={{
          position: "absolute",
          top: 0,
          height: "90vh",
          zIndex: -1,
        }}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 200 200"
      >
        {getTextColumn(6, 9)}
        {getTextColumn(20, 7)}
        {getTextColumn(34, 5)}
        {getTextColumn(48, 6)}
        {getTextColumn(62, 5)}
        {getTextColumn(76, 7)}
        {getTextColumn(90, 4)}
        {getTextColumn(104, 3)}
        {getTextColumn(118, 1)}
      </svg>
      <Worker
        boxProps={{
          sx: {
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "scaleX(-1)",
            height: 400
          }
        }}
      ></Worker>
    </Page>
  )
}