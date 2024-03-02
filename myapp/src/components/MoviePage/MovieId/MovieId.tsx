import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { useAppSelector } from "store";
import { userSelectors } from "store/users/config";
import Rating from '@mui/material/Rating';

const MovieId = () => {
    const { id } = useParams()
    const movie = useAppSelector(userSelectors.selectMovies)

    console.log(id)
    console.log(movie)

    movie.map((e) => {
        console.log(e.id)
        if (e.id === id) {
            console.log(e)
        }
    })

    return (
        <Box>
            {
                movie ? (movie.map((e: any, idx: number) => {
                    return (
                        <Box>

                            {
                                e.id === id ? (

                                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                        <Typography component={'h1'} variant="h1">
                                            {e.title}
                                        </Typography>
                                        <img src={e.imageUrl} alt={e.title} width={370}/>

                                        <Typography component={'span'}>
                                            {e.description}
                                        </Typography>
                                        <Typography component={'span'}>
                                            {e.year}
                                        </Typography>
                                        <Typography component={'span'}>
                                            {e.country}
                                        </Typography>
                                        <Typography component={'span'}>
                                            <Rating
                                                name="simple-controlled"
                                                value={e.rating}
                                                // onChange={(event, newValue) => {
                                                //     setValue(newValue);
                                                // }}
                                            />
                                            {e.rating}
                                        </Typography>
                                        <Typography component={'span'}>
                                            {e.genres}
                                            {e.actors}
                                        </Typography>
                                        <Typography component={'span'}>

                                            {/* <video src={e.videoUrl}/> */}
                                            <iframe width="420" height="345" src={e.videoUrl}>
                                            </iframe>
                                        </Typography>
                                    </Box>) : null

                            }
                            {/* }) */}
                            {/* }  */}
                            {/* <video src=""/> */}
                        </Box>
                    )

                })

                ) : <Box>
                    not found
                </Box>

                //             {/* {
                //                 movie.map((e:any, idx:number)=>{



            }
        </Box>
    );
};
export default MovieId;