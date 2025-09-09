import axios from "axios";
import { options, SEARCH_MOVIE_URL } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setSearchMovieDetails } from "../redux/searchSlice";
import React, { useState } from "react";
import { setLoading } from "../redux/userSlice";
import MovieList from './MovieList'; // Adjust path if needed

const SearchMovie = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);
  const { movieName, searchedMovie } = useSelector(
    (store) => store.search // ✅ Fixed this line
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    try {
      const res = await axios.get(
        `${SEARCH_MOVIE_URL}${searchMovie}&include_adult=false&language=en-US&page=1`,
        options
      );
      const movies = res?.data?.results;
      dispatch(setSearchMovieDetails({ searchMovie, movies }));
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false));
    }
    setSearchMovie("");
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <div className="flex justify-center pt-[10%] w-full px-4">
        <form onSubmit={submitHandler} className="w-full max-w-2xl">
          <div className="flex items-center overflow-hidden rounded-md border border-gray-700 bg-[#141414] shadow-lg">
            <input
              value={searchMovie}
              onChange={(e) => setSearchMovie(e.target.value)}
              type="text"
              placeholder="Search for movies..."
              className="flex-grow px-4 py-3 text-white bg-transparent outline-none placeholder-gray-400"
            />
            <button
              type="submit"
              className="bg-red-700 hover:bg-red-600 text-white px-6 py-3 font-semibold transition duration-200"
            >
              {isLoading ? "Loading..." : "Search"}
            </button>
          </div>
        </form>
      </div>

      {/* ✅ Conditional rendering */}
      {searchedMovie && searchedMovie.length > 0 && (
        <MovieList title={`Results for: ${movieName}`} movies={searchedMovie} />
      )}
    </div>
  );
};

export default SearchMovie;
