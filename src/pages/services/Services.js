import Page from "../../components/Page";
import ComputerRoundedIcon from '@mui/icons-material/ComputerRounded';
import Card from "../../components/Card";
import PageContent from "../../components/PageContent";

export default function Services() {
  return (
    <Page
      justifyContent="center"
    >
      <PageContent
        container
        direction="row"
        justifyContent="space-evenly"
      >
        <Card sx={{maxWidth: 300}} title="Servizio 1" Icon={ComputerRoundedIcon} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque, felis vitae interdum ullamcorper, lorem lorem viverra justo, sed auctor dui massa sit amet mi. Vestibulum eget quam tellus"></Card>
        <Card sx={{maxWidth: 300}} title="Servizio 2" Icon={ComputerRoundedIcon} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque, felis vitae interdum ullamcorper, lorem lorem viverra justo, sed auctor dui massa sit amet mi. Vestibulum eget quam tellus"></Card>
        <Card sx={{maxWidth: 300}} title="Servizio 3" Icon={ComputerRoundedIcon} description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis pellentesque, felis vitae interdum ullamcorper, lorem lorem viverra justo, sed auctor dui massa sit amet mi. Vestibulum eget quam tellus"></Card>
      </PageContent>
    </Page>
  )
}