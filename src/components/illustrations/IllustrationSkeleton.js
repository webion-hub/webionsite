import { Box, Grid, Skeleton } from "@mui/material";

/**
 * @param {import("./typing").IllustrationProps}
 */
export default function IllustrationSkeleton({ boxProps }) {
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
          height={200}
          width={128}
        />
      </Grid>
    </Box>
  );
}
