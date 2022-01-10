import { Stack, Grid, useMediaQuery } from "@mui/material";
import CircleBox from "../../components/CircleBox";
import { CodeThinking } from "../../components/illustrations/illustrations";
import MaybeShow from "../../components/MaybeShow";
import TitleParagraph from "../../components/TitleParagraph";
import theme from "../../theme/theme";
import homeBackgroundStyle from "./styles/homeBackgroundStyle";
import homeTitleParagraphStyle from "./styles/homeTitleParagraphStyle";

export default function Home() {
  const isMobileView = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Stack
      direction="column"
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
        sx={homeBackgroundStyle}
      >
        <MaybeShow show={!isMobileView}>
          <CircleBox
            Component={Grid}
            xs={12}
            md={6}
            item
            container
            direction="column"
            justifyContent="center"
            alignItems="flex-end"
          >
            <CodeThinking boxProps={{width: "80%"}}/>
          </CircleBox>
        </MaybeShow>
        <TitleParagraph
          xs={12}
          md={6}
          item

          title="Titolo webion"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque a dignissim neque, vitae elementum orci. Donec molestie non ex vitae ullamcorper."
          buttonLabel="Scopri di più"

          buttonProps={{
            onClick: _ => {},
          }}

          sx={homeTitleParagraphStyle(isMobileView)}
        />
      </Grid>
    </Stack>
  )
}