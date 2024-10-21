import Grid from '@mui/material/Grid2';
import { Container, styled, Typography } from "@mui/material";

import StyledTech from '../../../../components/tech/StyledTech';


const Skills = () => {
  return (
    <>

      <StyledSkills id='skills'>
        <Container maxWidth='lg'>
          <Grid container spacing={4} display={'flex'}>

            <Grid size={{ xs: 12, md: 12 }}>
              <Typography color="primary.main" variant="h2" textAlign={"center"} pt={2}>Habilidades</Typography>
            </Grid>

            <Grid container size={{ xs: 12, md: 12 }} display={"flex"} justifyContent={'center'} spacing={2} >

              <StyledTech>
                  <Typography color="primary.main" variant="h5" textAlign={"center"}>Java</Typography>
              </StyledTech>

              
              <StyledTech>
                <Typography color="primary.main" variant="h5" textAlign={"center"}>JavaScript</Typography>
              </StyledTech>
            
              <StyledTech>
                <Typography color="primary.main" variant="h5" textAlign={"center"}>React Native</Typography>
              </StyledTech>

              <StyledTech>
                <Typography color="primary.main" variant="h5" textAlign={"center"}>TypeScript</Typography>
              </StyledTech>

              <StyledTech>
                <Typography color="primary.main" variant="h5" textAlign={"center"}>Git</Typography>
              </StyledTech>

              <StyledTech>
                <Typography color="primary.main" variant="h5" textAlign={"center"}>GitHub</Typography>
              </StyledTech>

              <StyledTech>
                <Typography color="primary.main" variant="h5" textAlign={"center"}>CSS</Typography>
              </StyledTech>

              <StyledTech>
                <Typography color="primary.main" variant="h5" textAlign={"center"}>HTML</Typography>
              </StyledTech>

              <StyledTech>
                <Typography color="primary.main" variant="h5" textAlign={"center"}>Redes</Typography>
              </StyledTech>
              
              <StyledTech>
                <Typography color="primary.main" variant="h5" textAlign={"center"}>MySql</Typography>
              </StyledTech>
              
              
            </Grid>


          </Grid>
        </Container>
      </StyledSkills>
    </>
  )
}

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.contrastText,
  display: "flex",
  justifyContent: 'center',

  [theme.breakpoints.up('xs')]: {
    height: "45vh",
  },
  [theme.breakpoints.up('md')]: {
    height: "30vh",
  },

}));




export default Skills
