import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link, Navigate, useNavigate } from 'react-router-dom';


interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}
function upDatePage(){
  return  window.location.reload()
}

const drawerWidth = 240;
const navItems = [
  { item: 'Home', address: '/' },
  { item: 'Dashboard', address: '/dashboard' },
  { item: 'Lee Algorithm', address: '/lee_algorithm' },
  { item: 'Weather', address: '/weather' },
  { item: 'Chat', address: '/chat' },
  {item: 'VideoPlayer', address: '/videoPlayer' },
  {item: 'MoviePage', address: '/moviePage' },

]
export default function Navbar(props: Props) {
  const navigate = useNavigate()
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const handleLogOut = () => {
    localStorage.removeItem('user');
    navigate('/')
    upDatePage()
  };
  
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MyApp
      </Typography>
      <Divider />
      <List>
        {navItems.map((item: any, id: number) => (
          <Link to={item.address} key={id}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item.item} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
        <Button onClick={handleLogOut}>Log out</Button>
      </List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            MyApp
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item: any, id: number) => (
              <Link to={item.address} key={id}>
                <Button sx={{ color: '#fff' }}>
                  {item.item}
                </Button>
              </Link>
            ))}
              <Button sx={{color:'white'}} onClick={handleLogOut}>Log out</Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />

    </Box>
  );
}
