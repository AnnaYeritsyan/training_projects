import {MovieDTO} from "../../../store/users/users.slice";

export async function fetchMoviesFromAPI() {
    try {
      const response = await fetch('http://localhost:3004/');
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching movie data:', error);
      throw error;
    }
  }

  export const addNewMovieApi = async (newMovie: MovieDTO) => {
    try {
        const response = await fetch('http://localhost:3004/', {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
            body: JSON.stringify(newMovie)
        });
        if (!response.ok) {
            throw new Error('Failed to fetch movie data');
        }
        return await response.json();
    } catch(err: any) {
        throw new Error(err)
    }
  }