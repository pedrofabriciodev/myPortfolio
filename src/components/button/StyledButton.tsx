import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps{
  children: ReactNode
}


const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

    return (
      <>
        <StyleButton>{children}</StyleButton>
      </>
    )
  }
  

  const StyleButton = styled("button")(({theme})=> ({
    backgroundColor:"transparent",
    border:`1px solid ${theme.palette.primary.contrastText}`,
    borderRadius:'3px',
    padding:"5px 15px",
    width:"100%",
    color: theme.palette.primary.contrastText,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap:"10px",

    '&:hover': {
      backgroundColor:theme.palette.secondary.light
    }
  }))

  export default StyledButton
  