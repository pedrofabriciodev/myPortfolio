
import Avatar from "../../../../assets/images/octocat-1725150690878.png"

import Grid from '@mui/material/Grid2';
import { Container, styled, Typography } from "@mui/material";

import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from "../../../../components/button/StyledButton";



const Hero = () => {

  const fileUrl = "https://drive.google.com/file/d/1G6OAeT9ykzOsxSbFlMyx9Pg1gg8t01vA/view?usp=sharing";
    return (
      <>

        <StyledHero>
            <Container maxWidth= 'lg'>
                <Grid container spacing={2}>
                    <Grid size={{ xs: 12, md: 5 }} display={"flex"} justifyContent={"center"}>
                      <StyleAvatar src={Avatar} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                      <Typography color="primary.contrastText" variant="h1" textAlign={"center"} pb={2}>Pedro Fabricio</Typography>
                      <Typography color="primary.contrastText" variant="h2" textAlign={"center"}>I'm a Software Engineer</Typography>


                      <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>

                        <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                          <StyledButton onClick={()=> window.open(fileUrl, "_blank")}>  
                            <DownloadIcon/>
                            <Typography>Curriculo</Typography>
                          </StyledButton>
                        </Grid>

                        <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
                          <StyledButton onClick={()=> window.location.href = 'mailto:pedrofabriciodev@gmail.com'}>
                            <EmailIcon/>
                            <Typography>Enviar Email</Typography>
                          </StyledButton>
                        </Grid>


                      </Grid>

                    </Grid>
                </Grid>
            </Container>

        </StyledHero>
      </>
    )
  }

  const StyledHero = styled("div")(({ theme }) => ({
    height: "100vh",
    backgroundColor: theme.palette.primary.main,
    display:"flex",
    alignItems: "center",
    [theme.breakpoints.up('xs')]: {
      paddingTop: "80px"
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: "0px"
    },

  }));
  

  const StyleAvatar = styled("img")(()=> ({
    width:"80%"
  }))

  export default Hero
  