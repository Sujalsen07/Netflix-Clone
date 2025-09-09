import React from 'react';
import useMovieById from '../hooks/useMovieById';
import { useSelector } from 'react-redux';

const VideoBackground = ({ movieId, bool }) => {
  const trailerMovie = useSelector((store) => store.movie.trailerMovie);

  console.log("VideoBackground render, movieId:", movieId);
console.log("VideoBackground render, trailer key:", trailerMovie?.key);
  
  // Just call the hook — no need to assign its return value
  useMovieById(movieId);

  if (!trailerMovie || !trailerMovie.key) return null;

  console.log("VideoBackground render, trailer key:", trailerMovie.key);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <iframe
          key={trailerMovie.key}
          className="w-[177.77vh] h-screen md:w-screen md:h-[56.25vw] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          src={`https://www.youtube.com/embed/${trailerMovie.key}?autoplay=1&mute=1&controls=0&loop=1&playlist=${trailerMovie.key}&modestbranding=1&showinfo=0`}
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default VideoBackground;
