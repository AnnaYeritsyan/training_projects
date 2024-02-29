import { Box, ListItem, ListItemButton,ListItemText } from '@mui/material';


        
const MovieHeader = () => {
    return (
        <Box>
            <nav style={{ width:"28%",display:'flex', justifyContent:'space-between' }}>
             <ListItem disablePadding 
             sx={{border:'1px solid black',
             borderRadius:'8px', 
             width:'100px', 
             backgroundColor:'white',
             color:'blue'
            }}>
            <ListItemButton component="a" href="moviePage">
              <ListItemText primary="Movies" />
            </ListItemButton>
          </ListItem>  
          <ListItem disablePadding 
            sx={{border:'1px solid black',
            borderRadius:'8px', 
            width:'100px', 
            backgroundColor:'white',
            color:'blue'
        }}> 
            <ListItemButton component="a" href="movieAdmin" >
              <ListItemText primary="Admin " />
            </ListItemButton>
          </ListItem>  
          </nav>
        </Box>
    );
};
export default MovieHeader;