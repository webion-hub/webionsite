import { Grid, Skeleton } from "@mui/material";

/**
 * @param {import("./typing").IllustrationProps}
 */
export default function IllustrationSkeleton({ skeletonProps }) {
  const size =
    getSkeletonSize(skeletonProps.size);

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Skeleton
        variant="rectangular"
        animation="wave"
        sx={{
          borderRadius: '8px',
        }}
        {...size}
        {...skeletonProps}
      />
    </Grid>
  );
}

/**
 * @param {SkeletonSize} size
 * @returns {Size}
 */
const getSkeletonSize = (size) => {
  const normalWidth = 96;
  const normalHeight = 96;
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
      width: normalWidth * 1.8,
      height: normalHeight * 1.8,
    },
    'wide': {
      width: '100%',
      height: '150px',
    },
    'fill': {
      width: '100%',
      height: '100%',
    },
  }[size];

  return result ?? size;
}
