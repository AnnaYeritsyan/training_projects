 export async function fetchMovies() {
    try {
      const response = await fetch('http://localhost:3004/');
      console.log(response)
      if (!response.ok) {
        throw new Error('Failed to fetch movie data');
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching movie data:', error);
      throw error;
    }
  }
