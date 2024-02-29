import { Box } from '@mui/material';
import MovieHeader from './MovieHeader/MovieHeader';
import io from "socket.io-client";
import { useEffect, useState, useRef } from 'react';
import { fetchMovies } from './MovieApi/MovieApi';
import { useDispatch } from 'react-redux';
import { moviePostData } from 'store/users/actions';
import { userSelectors, usersActions } from 'store/users/config';
import { useAppDispatch, useAppSelector } from 'store';

const MoviePage = () => {

    const socketInstance = useRef<null | any>(null);

    // console.log(socket)
    const dispatch = useAppDispatch();
    const movies = useAppSelector(userSelectors.selectMoviePlaceholderData)


    useEffect(() => {
        dispatch(usersActions.moviePostData())
    }, [dispatch]);

    console.log(movies);
    return (
        <Box>
            <MovieHeader />
            MoviePage
        </Box>
    );
};
export default MoviePage;
