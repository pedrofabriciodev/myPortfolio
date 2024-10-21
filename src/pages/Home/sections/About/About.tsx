import Grid from '@mui/material/Grid2';
import { Container, Divider, styled, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';



const About = () => {
  return (
    <>

      <StyledAbout id='about'>
        <Container maxWidth='lg'>
          <Grid container spacing={4}>

            <Grid size={{ xs: 12, md: 12 }}>
              <Typography color="primary.main" variant="h2" textAlign={"center"} pt={2}>Sobre mim</Typography>
            </Grid>

            <Grid container size={{ xs: 12, md: 12 }} display={"flex"} justifyContent={'center'} spacing={2} >

              <Grid size={{ xs: 12, md: 2 }} display={"flex"} justifyContent={'center'}>
                <StyledInfo>
                  <WorkspacePremiumIcon />
                  <Typography color="primary.main" variant="h5" textAlign={"center"}>Experiência</Typography>
                  <Typography color="primary.main" variant="subtitle1" textAlign={"center"}>1 Ano</Typography>
                  <Typography color="primary.main" variant="subtitle1" textAlign={"center"}>Desenvolvimento</Typography>
                </StyledInfo>
              </Grid>

              <Grid size={{ xs: 12, md: 2 }} display={"flex"} justifyContent={'center'}>
                <StyledInfo>
                  <SchoolIcon />
                  <Typography color="primary.main" variant="h5" textAlign={"center"}>Educação</Typography>
                  <Typography color="primary.main" variant="subtitle1" textAlign={"center"}>Tecnologo Ads</Typography>
                </StyledInfo>
              </Grid>

            </Grid>

            <Grid size={{ xs: 12, md: 12 }}>
              <Typography color="primary.main" variant="h6" textAlign={'left'}>
                Estou dedicado a aprender e constantemente estudando novas tecnologias, buscando as melhores formas de aplicá-las. 
                Quero desenvolver minhas habilidades e avançar profissionalmente. 
                Procuro uma oportunidade em um ambiente corporativo onde possa ganhar experiência prática e contribuir efetivamente.
              </Typography>
            </Grid>

            <Grid size={{ xs: 12, md: 12 }}  >
              <Divider variant='fullWidth' sx={{ borderBottomWidth: 2, borderColor: "primary.main" }} />
            </Grid>

          </Grid>
        </Container>
      </StyledAbout>
    </>
  )
}

const StyledAbout = styled("div")(({ theme }) => ({
  height: "50vh",
  backgroundColor: theme.palette.primary.contrastText,
  display: "flex",
  justifyContent: 'center',

  [theme.breakpoints.up('xs')]: {
    height: "70vh",
  },
  [theme.breakpoints.up('md')]: {
    height: "50vh",
  },

}));

const StyledInfo = styled("div")(({ theme }) => ({
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: '3px',
  width: 180,
  height: 120,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 10,
  margin: 0

}));



export default About
