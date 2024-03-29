import {Box, Card, CardMedia, CardContent, Typography} from '@mui/material';
import MovieHeader from './MovieHeader/MovieHeader';
import {useEffect} from 'react';
import {usersActions, userSelectors} from 'store/users/config';
import {useAppDispatch, useAppSelector} from 'store';
import { useNavigate, Link } from 'react-router-dom';


const MoviePage = () => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const movies = useAppSelector(userSelectors.selectMovies)

    useEffect(() => {
        dispatch(usersActions.getMovies())
    }, [dispatch]);

    const handleClick = (id:any) =>{
        navigate(`/moviePage/${id}`)
    }
    return (
        <Box>
            <MovieHeader/>
            <div className="flex-center flex-wrap">
                {movies.map(item => (
                    // <Link to={`/moviePage/${item.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <Card sx={{maxWidth: 345}} key={item.id} onClick={()=>handleClick(item.id)}>
                        <CardMedia
                            sx={{height: 140}}
                            image={item.imageUrl}
                            title="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {item.title} - {item.country}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {item.description}
                            </Typography>
                            {item.actors?.length > 0 && (
                                <div className="flex-center" >
                                    <span>Actors</span> -
                                    <div className="flex-center">
                                        {item.actors.map((a, id) => (
                                            <Typography variant="body2" color="text.secondary" key={id}> 
                                                {a}
                                            </Typography>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </CardContent>
                    </Card>
                    // </Link>
                ))}
            </div>

        </Box>
    );
};
export default MoviePage;
