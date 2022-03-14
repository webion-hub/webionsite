import { Box, Grid, IconButton } from "@mui/material";
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { useEffect, useRef } from 'react';
import MaybeShow from './/MaybeShow';

export default function Slider({children, elementsShown}) {
  const sliderRef = useRef()
  const sliderIndexRef = useRef(0)

  useEffect(() => {
    window.addEventListener('resize', reset)

    return () => window.removeEventListener('resize', reset)
  }, [])

  const reset = () => {
    sliderRef.current.scrollLeft = 0
    sliderIndexRef.current = 0
  }

  const back = () => {
    sliderIndexRef.current --;
    if (sliderIndexRef.current < 0) {
      sliderIndexRef.current = getChildrenNumber() - elementsShown; 
    }

    sliderRef.current.scrollLeft += getScrollLeftPos(sliderIndexRef.current)
  }

  const next = () => {
    sliderIndexRef.current ++;
    if (sliderIndexRef.current > getChildrenNumber() - elementsShown) {
      sliderIndexRef.current = 0; 
    }

    sliderRef.current.scrollLeft += getScrollLeftPos(sliderIndexRef.current)
  }

  const getScrollLeftPos = (index) => {
    const parentLeftPos = sliderRef.current.getBoundingClientRect().x
    const childLeftPos = sliderRef.current.childNodes[index].getBoundingClientRect().x

    return childLeftPos - parentLeftPos
  }

  const getChildrenNumber = () => {
    return children.length
  }

  const shoudlShowArrows = () => {
    return getChildrenNumber() != elementsShown
  }

  return (
    <Grid
      container
      direction="row"
      flexWrap="nowrap"
      alignItems="center"
    >

      <MaybeShow show={shoudlShowArrows()}>
        <IconButton
          aria-label="Indietro"
          size="large"
          onClick={back}
        >
          <ArrowBackIosRoundedIcon/>
        </IconButton>
      </MaybeShow>

      <Grid
        ref={sliderRef}
        container
        direction="row"
        flexWrap="nowrap"
        sx={{
          width: "100%",
          whiteSpace: "nowrap",
          overflow: "hidden",
          scrollBehavior: "smooth",
          "& > *": {
            display: "inline-block",
            minWidth: `${100 / elementsShown}%`,
          },
        }}
      >
        {
          children.map((child, key) => {
            return (
              <Box key={key} p={0.5}>
                {child}
              </Box>
            )
          })
        }
      </Grid>

      <MaybeShow show={shoudlShowArrows()}>
        <IconButton
          aria-label="Avanti"
          size="large"
          onClick={next}
        >
          <ArrowForwardIosRoundedIcon/>
        </IconButton>
      </MaybeShow>

    </Grid>
  )
}