import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movie",
  initialState: {
    nowPlayingMovies: null,
    popularMovie: null,
    topRatedMovies: null,
    upcomingMovies: null,
    toggle: false,
    trailerMovie: null,
    open: false,
    id: "",
    movieDetails: null,  // <-- Add this field for storing movie details
  },
  reducers: {
    //actions
    getNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    getPopularMovie: (state, action) => {
      state.popularMovie = action.payload;
    },
    getTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    getUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    setToggle: (state) => {
      state.toggle = !state.toggle;
      console.log(
        "✅ setToggle reducer called. New toggle value:",
        state.toggle
      );
    },
    getTrailerMovie: (state, action) => {
      state.trailerMovie = action.payload;
    },
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    getId: (state, action) => {
      state.id = action.payload;
    },
    setMovieDetails: (state, action) => {
      state.movieDetails = action.payload;  // <-- new reducer to set movie details
    },
  },
});

export const {
  getNowPlayingMovies,
  getPopularMovie,
  getTopRatedMovie,
  getUpcomingMovie,
  setToggle,
  getTrailerMovie,
  setOpen,
  getId,
  setMovieDetails,  // <-- export it here
} = movieSlice.actions;

export default movieSlice.reducer;
