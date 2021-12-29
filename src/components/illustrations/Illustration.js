import { Box, Grid } from "@mui/material";
import { Skeleton } from "@mui/lab";
import React, { useState } from "react";
import { useEffect, useRef } from "react";
import IllustrationLoader from "./illustration_loader";
import theme from '../../Theme';


export const Illustration = React.forwardRef((props, ref) => {
  const skeleton = getIllustrationSkeleton(props.boxProps);
  const illustration = useRef(skeleton);
  const [, setIsLoaded] = useState(false);

  const updateContent = (svg) => {
    illustration.current = svg;
    setIsLoaded(true);
  };

  useEffect(() => {
    IllustrationLoader
      .create({...props, ref: ref })
      .load()
      .then(svg => updateContent(svg));
  }, [props, ref]);

  return illustration.current;
});


const getIllustrationSkeleton = (boxProps) => {
  return (
    <Box {...boxProps}>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Skeleton 
          animation="wave" 
          height={200} 
          width={128}
        />
      </Grid>
    </Box>
  );
}


Illustration.lazy = (illustrationPath) => {
  return (props) => {
    return <Illustration path={illustrationPath} {...props}/>;
  };
};


Illustration.defaultProps = {
  boxProps: {
    width: '100%',
    maxWidth: '100%',
    margin: 0,
    height: '100%',
  },
  svgProps: {
    height: '100%',
    width: '100%',
    textColor: '#fff',
    primaryColor: theme.palette.primary.main,
    secondaryColor: theme.palette.secondary.main,
  },
};