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
              <MenuItem>About</MenuItem>
              <MenuItem>Skills</MenuItem>
              <MenuItem>Projects</MenuItem>
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
          <ListItemButton>
            <ListItemText primary="About" />
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Skills" />
          </ListItemButton>
          <ListItemButton>
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
