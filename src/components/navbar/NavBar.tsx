import { AppBar, MenuItem, styled, Toolbar } from "@mui/material"

const NavBar = () => {

    return (
      <>
        <AppBar position="absolute">
            <StyledNavBar>
                <MenuItem>About</MenuItem>
                <MenuItem>Skills</MenuItem>
                <MenuItem>Projects</MenuItem>
            </StyledNavBar>  
        </AppBar>
      </>
    )
  }


  const StyledNavBar = styled(Toolbar)(() => ({
   display:"flex",
   justifyContent:"space-evenly"
  }));
  
  
  export default NavBar
  