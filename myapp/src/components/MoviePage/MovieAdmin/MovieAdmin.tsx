import {Box, Button, Rating, TextField,} from '@mui/material';
import {ChangeEvent, useState, KeyboardEvent} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {MovieDTO} from "../../../store/users/users.slice";
import {v4} from 'uuid';
import moment from 'moment'
import {usersActions} from "../../../store/users/config";
import {useAppDispatch} from "../../../store";
const MovieAdmin = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch()
    const [actorName, setActorName] = useState('')
    const [genre, setGenre] = useState('')
    const [newMovie, setNewMovie] = useState<MovieDTO>({
        id: v4(),
        title: "",
        description: "",
        year: 0,
        country: "",
        rating: 0,
        genres: [],
        actors: [],
        imageUrl: "",
        videoUrl: ""
    })

    const handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
        setNewMovie({
            ...newMovie,
            [ev.target.name]: ev.target.value
        })
    }

    const handleChangeActor = (ev: ChangeEvent<HTMLInputElement>) => {
        setActorName(ev.target.value)
    };

    const handleAddActor = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') {
            setNewMovie({...newMovie, actors: newMovie.actors.concat(actorName)})
            setActorName('')
        }
    };

    const handleChangeGenre = (ev: ChangeEvent<HTMLInputElement>) => {
        setGenre(ev.target.value)
    };

    const handleAddGenre = (ev: KeyboardEvent<HTMLInputElement>) => {
        if (ev.key === 'Enter') {
            setNewMovie({...newMovie, genres: newMovie.genres.concat(genre)})
            setGenre('')
        }
    };

    const handleSaveMovie = () => {
        dispatch(usersActions.addNewMovie(newMovie))
        navigate('/moviePage')
    }
    return (
        <div>

            <Box sx={{
                width: '100px',
                display: "flex",
                gap: '1rem'
            }}>
                <Link to="/moviePage" className="movies_header_link">
                    Movies
                </Link>
            </Box>
            <div className="flex-col w-full mt">
                <TextField
                    name="title"
                    value={newMovie.title}
                    onChange={handleChange}
                    placeholder="Title"
                />
                <TextField
                    name="description"
                    value={newMovie.description}
                    onChange={handleChange}
                    placeholder="Description"
                />
                <TextField
                    name="country"
                    value={newMovie.country}
                    onChange={handleChange}
                    placeholder="Country"/>

                <div>
                    <TextField
                        name="actors"
                        value={actorName}
                        onChange={handleChangeActor}
                        placeholder="Actors"
                        onKeyDown={handleAddActor}
                    />

                    <div className="flex-center">
                        {newMovie.actors.map(item => <span>{item}</span>)}
                    </div>
                </div>

                <div>
                    <TextField
                        value={genre}
                        onChange={handleChangeGenre}
                        placeholder="Genres"
                        onKeyDown={handleAddGenre}
                    />

                    <div className="flex-center">
                        {newMovie.genres.map(item => <span>{item}</span>)}
                    </div>
                </div>
                <Rating
                    value={newMovie.rating}
                    onChange={(event, newValue) => {
                        if(!newValue) {
                            return;
                        }
                        setNewMovie({
                            ...newMovie,
                            rating: newValue
                        })
                    }}
                />

            <input type="date" onChange={(ev)=> {
                setNewMovie({
                    ...newMovie,
                    year: moment(ev.target.value).year()
                })
            }}/>


                <Button variant='outlined' onClick={handleSaveMovie}>
                    Save
                </Button>
            </div>
        </div>
    );
};
export default MovieAdmin;