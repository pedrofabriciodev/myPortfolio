import Grid from '@mui/material/Grid2';
import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledTechProps{
  children: ReactNode
}


const StyledTech: React.FC<StyledTechProps> = ({children}) => {

  


    return (
      <>
        <Grid size={{ xs: 6, md: 2 }} display={"flex"} justifyContent={'center'}>
            <StyleTech>
                {children}
            </StyleTech>
        </Grid>
      </>
    )
  }
  

  const StyleTech = styled("div")(({theme})=> ({
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: '3px',
    width: 150,
    height: 40,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:'center',
    color: theme.palette.primary.contrastText,

    '&:hover': {
      backgroundColor:theme.palette.secondary.light
    }
  }))

  export default StyledTech
  