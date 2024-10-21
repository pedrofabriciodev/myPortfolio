import { AppBar, styled, Toolbar, IconButton, Drawer, List, ListItemText, ListItemButton, MenuItem, useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const InfoBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  const theme = useTheme();
  
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <>
      <AppBar position="absolute">
        <StyledNavBar>

          {isMdUp ? (

            <StyledMenu sx={{ display: { xs: "none", md: "flex" } }}>
              <MenuItem component="a" href="#about">About</MenuItem>
              <MenuItem component="a" href="#skills">Skills</MenuItem>
              <MenuItem component="a" href="#projects">Projects</MenuItem>
            </StyledMenu>

          ):

            <IconButton
              color="inherit"
              edge="end" 
              aria-label="menu"
              onClick={toggleDrawer(true)} 
            >
              <MenuIcon />
            </IconButton>

          }    
        </StyledNavBar>
      </AppBar>

      <Drawer
        anchor="right" 
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: { width: 130, height:168, margin:2 }, 
        }}
      >
        <List>
          <ListItemButton component='a' href="#about" onClick={toggleDrawer(false)}>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton component='a' href="#skills" onClick={toggleDrawer(false)}>
            <ListItemText primary="Skills" />
          </ListItemButton>
          <ListItemButton component='a' href="#projects" onClick={toggleDrawer(false)}>
            <ListItemText primary="Projects" />
          </ListItemButton>
        </List>

      </Drawer>
    </>
  );
};

const StyledNavBar = styled(Toolbar)(() => ({
  display: "flex",
  justifyContent: "flex-end", 
}));

const StyledMenu = styled('div')(() => ({
  display: "flex",
  justifyContent: "space-evenly",
  width: "100%",
}));

export default InfoBar;
