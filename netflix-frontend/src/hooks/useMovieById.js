import { useEffect } from 'react';
import axios from 'axios';
import { options } from '../utils/constant';
import { useDispatch } from 'react-redux';
import { getTrailerMovie, setMovieDetails } from '../redux/movieSlice'; // Assuming you have setMovieDetails action

const useMovieById = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return; // avoid fetching if no id

    const fetchMovieData = async () => {
      try {
        // Fetch videos (trailers)
        const videoRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        const trailers = videoRes.data.results.filter((item) => item.type === 'Trailer');
        const trailerToUse = trailers.length > 0 ? trailers[0] : videoRes.data.results[0];
        dispatch(getTrailerMovie(trailerToUse));

        // Fetch full movie details (title, description, etc)
        const detailsRes = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          options
        );
        dispatch(setMovieDetails(detailsRes.data));

      } catch (error) {
        console.error('Failed to fetch movie data:', error);
      }
    };

    fetchMovieData();
  }, [movieId, dispatch]);
};

export default useMovieById;
