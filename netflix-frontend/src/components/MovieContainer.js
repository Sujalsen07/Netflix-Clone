import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const MovieContainer = () => {
  const nowPlaying = useSelector((store) => store.movie.nowPlayingMovies);
  const popular = useSelector((store) => store.movie.popularMovie);
  const topRated = useSelector((store) => store.movie.topRatedMovies);
  const upcoming = useSelector((store) => store.movie.upcomingMovies);


  return (
    <div className="bg-black">
      <div className="-mt-52 relative z-10">
        {nowPlaying && <MovieList title={"Now Playing"} movies={nowPlaying} />} 
        {popular && <MovieList title={"Popular Movies"} movies={popular} />}
        {topRated && <MovieList title={"Top Rated"} movies={topRated} />}
        {upcoming && <MovieList title={"Upcoming"} movies={upcoming} />}
      </div>
    </div>
  );
};

export default MovieContainer;
