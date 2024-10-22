import Grid from '@mui/material/Grid2';
import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledTechProps{
  children: ReactNode
}


const ProjectsBox: React.FC<StyledTechProps> = ({children}) => {

  


    return (
      <>
          <Grid size={{xs:12, md:6}} >
            <StyleProject>
                {children}
            </StyleProject>
          </Grid> 
       </>
    )
  }
  

  const StyleProject = styled("div")(({theme})=> ({
    border: `1px solid ${theme.palette.primary.contrastText}`,
    borderRadius: '3px',
    width: "100%",
    height:'100%',
    padding:15,
  }))

  
  export default ProjectsBox
  