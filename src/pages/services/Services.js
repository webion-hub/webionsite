import { alpha, Grid, Typography, useMediaQuery } from "@mui/material";
import Page from "../../components/Page";
import theme from "../../theme/theme";

export default function Services() {
  const isLg = useMediaQuery(theme.breakpoints.down('lg'))
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Page
      justifyContent="center"
      alignItems="center"
      sx={{
        background: alpha(theme.palette.primary.main, 0.05),
        paddingBlock: 6
      }}
    >
      <Grid
        container
        direction="row"
        justifyContent="center"
      >
        <Grid
          item
          container
          justifyContent={isMd ? "center" : "flex-end"}
          alignItems="center"
          md={6}
          xs={12}
          sx={{
            maxWidth: isMd ? "80% !important" : "100% !important",
            paddingRight: isMd ? 0 : 4,
            paddingBottom: isMd ? 2 : 0,
            borderRight: isMd ? "" : `8px solid ${theme.palette.secondary.main}`,
            borderBottom: isMd ? `8px solid ${theme.palette.secondary.main}` : "",
          }}
        >
          <Typography
            variant={isLg ? "h2" : "h1"}
            align={isMd ? "center" : "right"}
          >
            <strong>
              Perchè <br/>
              sceglierci?
            </strong>
          </Typography>
        </Grid>

        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems={{sm: "center", md: "flex-start"}}
          md={6}
          xs={12}
          gap={6}
          sx={{
            paddingBlock: isMd ? 4 : 8,
            paddingInline: 4,
          }}
        >
          <Paragraph
            title="Versatilità"
            description="La nostra offerta comprende siti e applicazioni web, IOT per l'automazione mediante il web e software multipiattaforma."
          ></Paragraph>
          <Paragraph
            title="Personalizzazione"
            description="Offriamo una completa personalizzazione dell'interfaccia grafica e facciamo tutto su misura del cliente."
          ></Paragraph>
          <Paragraph
            title="Ottimizzazione"
            description="Crediamo sia fondamentale consegnare risultati di alta qualità. Per questo motivo ci concentriamo su una totale ottimizzazione ed un perfezionamento del prodotto finale."
          ></Paragraph>
        </Grid>
      </Grid>
    </Page>
  )
}

function Paragraph({title, description}) {
  const isMd = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Grid
      container
      direction="column"
      alignItems={isMd ? "center" : "flex-start"}
      gap={2}
      sx={{
        maxWidth: 500,
      }}
    >
      <Typography variant="h5">
        <strong>
          {title}
        </strong>
      </Typography>
      <Typography 
        variant="body2"
        align={isMd ? "center" : "left"}
      >
        {description}
      </Typography>
    </Grid>
  )
}

/*
function DashedCircle({sx, ...props}) {
  return (
    <Svg
      {...props}
      height="100"
      width="100"
      sx={{
        ...sx,
        animation: 'rotate 64s infinite linear',
        "@keyframes rotate": {
          "0%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      }}
    >
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke={theme.palette.info.main}
        strokeWidth="0.5"
        strokeDasharray="10,20,20,20"
        strokeLinecap="round"
        fill="transparent"
      />
    </Svg>
  )
}*/