import React from 'react'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'
import { useSelector } from 'react-redux'

const MainContainer = () => {
  const movie = useSelector(store => store.movie.nowPlayingMovies);
  if (!movie) return null; // fix: return null instead of nothing

  const { overview, id, title } = movie[4];

  return (
    <div className='relative w-screen h-screen'>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  )
}

export default MainContainer
