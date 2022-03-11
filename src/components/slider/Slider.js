import React from 'react';
import { Grid, IconButton, useMediaQuery } from '@mui/material';

import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import theme from '../../theme/theme';
import MaybeShow from '../MaybeShow';

export default function Slider(props) {
  const sliderRef = React.useRef()
  const currentIndex = React.useRef(0)

  const smallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const middleScreen = useMediaQuery(theme.breakpoints.down('md'));

  const {
    elementsShown,
    children,
    width,
    height,
  } = props


  const childrenWithProps = React.Children.map(children, child => {
    return React.cloneElement(child, {width, height})
  })

  const increaseScrollPosition = () => {
    currentIndex.current ++;

    if (currentIndex.current > childrenWithProps.length - getElementsShown())
      currentIndex.current = 0;

    sliderRef.current.scrollLeft = currentIndex.current*width;
  }

  const decreaseScrollPosition = () => {
    currentIndex.current --;

    if (currentIndex.current < 0)
      currentIndex.current = childrenWithProps.length - getElementsShown();

    sliderRef.current.scrollLeft = currentIndex.current*width;
  }

  const getElementsShown = () => {
    if (elementsShown !== "auto")
      return elementsShown

    if (smallScreen)
      return 1

    if (middleScreen)
      return 2

    return 4
  }

  const thereAreNotEnoughChildren = getElementsShown() >= childrenWithProps.length

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="center"
    >
      <MaybeShow
        show={!thereAreNotEnoughChildren}
      >
        <Grid item>
          <IconButton
            aria-label="Indietro"
            size="large"
            onClick={decreaseScrollPosition}
          >
            <ArrowBackIosRoundedIcon/>
          </IconButton>
        </Grid>
      </MaybeShow>
      <Grid
        ref={sliderRef}
        item
        container
        direction="row"
        sx={{
          width: width * getElementsShown(),
          overflow: "hidden",
          whiteSpace: "nowrap",
          display: "block",
          scrollBehavior: "smooth",
        }}
      >
        {
          childrenWithProps.map((child, index) =>
            <Grid key={index} item sx={{display: "inline-block"}}>{child}</Grid>
          )
        }
      </Grid>
      <MaybeShow
        show={!thereAreNotEnoughChildren}
      >
        <Grid item>
          <IconButton
            aria-label="Avanti"
            size="large"
            onClick={increaseScrollPosition}
          >
            <ArrowForwardIosRoundedIcon/>
          </IconButton>
        </Grid>
      </MaybeShow>
    </Grid>
  )
}


Slider.defaultProps = {
  elementsShown: "auto",
  height: "auto",
}

