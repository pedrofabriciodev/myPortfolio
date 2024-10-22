import Grid from '@mui/material/Grid2';
import { Container, styled, Typography } from "@mui/material";
import StyledButton from '../../../../components/button/StyledButton';
import ProjectsBox from '../../../../components/project/ProjectsBox';
import GenderChoose from '../../../../assets/images/GenderChooseInterface.jpeg'
import HairBeauty from '../../../../assets/images/HairBeautyInterface.jpeg'



const Projects = () => {

    return (
      <>

        <StyledProject id='projects'>
            <Container maxWidth= 'lg'>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 12 }}>
                        <Typography color="primary.contrastText" variant="h2" textAlign={"center"} pt={2}>Projetos</Typography>
                    </Grid>     

                    <ProjectsBox>
                        <Typography color="primary.contrastText" variant="h5">HairBeauty App</Typography>
                        <Typography color="primary.contrastText" variant="subtitle1">Mai 2024 - Jun 2024</Typography>
                        <Grid display={"flex"} justifyContent={"center"}>
                            <StyleAvatar src= {HairBeauty}/>
                        </Grid>
                        <Typography color="primary.contrastText" variant="subtitle1" pt={2}>Este projeto é um trabalho da faculdade desenvolvido em React Native utilizando Expo. O objetivo do aplicativo é fornecer uma interface intuitiva para selecionar serviços de beleza.</Typography>
                        <Typography color="primary.contrastText" variant="body1" sx={{fontWeight:'bold'}} pt={2}>Tecnologias: React Native, Expo, React Navigation, React Native Elements, React Native Vector Icons</Typography>
                       
                        <Grid container display={"flex"} justifyContent={"center"} spacing={2} pt={3}>
                            {/* <Grid size={{ xs: 12, md: 6 }}>
                                <StyledButton onClick={() => ({})}>
                                    <Typography>Ver Projeto</Typography>
                                </StyledButton>
                            </Grid> */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <StyledButton onClick={() => window.open('https://github.com/pedrofabriciodev/HairBeauty')}>
                                    <Typography>Ver Codigo</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </ProjectsBox>

                    <ProjectsBox>
                        <Typography color="primary.contrastText" variant="h5">Gender Choose App</Typography>
                        <Typography color="primary.contrastText" variant="subtitle1">Jul 2024 - Set 2024</Typography>
                        <Grid display={"flex"} justifyContent={"center"}>
                            <StyleAvatar src= {GenderChoose}/>
                        </Grid>
                        <Typography color="primary.contrastText" variant="subtitle1" pt={2}>Este projeto é um trabalho da faculdade desenvolvido em React Native utilizando Expo. O objetivo do aplicativo é fornecer um sistema para auto declaração de genero.</Typography>
                        <Typography color="primary.contrastText" variant="body1" sx={{fontWeight:'bold'}} pt={2}>Tecnologias: TypeScript, JavaScript, React Native, Expo, React Navigation, React Native Vector Icons</Typography>
                       
                        <Grid container display={"flex"} justifyContent={"center"} spacing={2} pt={3}>
                            {/* <Grid size={{ xs: 12, md: 6 }}>
                                <StyledButton onClick={() => ({})}>
                                    <Typography>Ver Projeto</Typography>
                                </StyledButton>
                            </Grid> */}
                            <Grid size={{ xs: 12, md: 6 }}>
                                <StyledButton onClick={() => window.open('https://github.com/pedrofabriciodev/Gender-Choose')}>
                                    <Typography>Ver Codigo</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </ProjectsBox>

                    
            
                </Grid>
            </Container>
        </StyledProject>
      </>
    )
  }

  const StyledProject = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    display:"flex",
    justifyContent:"center",
    [theme.breakpoints.up('xs')]: {
        height: "%",
      },
      [theme.breakpoints.up('md')]: {
        height: "100vh",
      },
  }));

  const StyleAvatar = styled("img")(({theme})=> ({
    width:360,
    height:360,
  }))


  export default Projects
  