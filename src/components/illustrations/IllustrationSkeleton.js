import { Box, Grid, Skeleton } from "@mui/material";

/**
 * @param {import("./typing").IllustrationProps}
 */
export default function IllustrationSkeleton({ boxProps, skeletonProps }) {
  const size =
    getSkeletonSize(skeletonProps.size);

  return (
    <Box {...boxProps}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Skeleton
          animation="wave"
          {...size}
        />
      </Grid>
    </Box>
  );
}

/**
 * @param {SkeletonSize} size
 * @returns {Size}
 */
const getSkeletonSize = (size) => {
  const normalWidth = 128;
  const normalHeight = 200;
  const result = {
    'small': {
      width: normalWidth * 0.5,
      height: normalHeight * 0.5,
    },
    'normal': {
      width: normalWidth,
      height: normalHeight,
    },
    'large': {
      width: normalWidth * 1.5,
      height: normalHeight * 1.5,
    },
  }[size];

  return result ?? size;
}
