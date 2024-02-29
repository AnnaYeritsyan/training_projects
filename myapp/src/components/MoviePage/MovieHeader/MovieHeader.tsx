import {Box, ListItem, ListItemButton, ListItemText} from '@mui/material';
import {Link} from 'react-router-dom'

const MovieHeader = () => {
    return (
        <Box sx={{
            width: '100px',
            display: "flex",
            gap: '1rem'
        }}>
            <Link to="/movieAdmin" className="movies_header_link">
                Admin
            </Link>
        </Box>
    );
};
export default MovieHeader;