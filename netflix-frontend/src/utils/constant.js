export const API_END_POINT = "http://localhost:8080/api/v1/user"

export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NmQxNTE2ZGJiMDk4OTkzMDM2NjUyMzJmZWEyMTk1ZCIsIm5iZiI6MTc1Njg5ODkxMC42MDQsInN1YiI6IjY4YjgyNjVlNDIzMmZiZmNkNzRlNDdiZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.idYTRNPWz-GZ469W7RO1Tt91mLehWr0XQO0KKZ17rV0'
  }
};

export const Now_Playing_Movie = "https://api.themoviedb.org/3/movie/now_playing"
export const Popular_Movie = "https://api.themoviedb.org/3/movie/popular"
export const Top_Rated_Movie="https://api.themoviedb.org/3/movie/top_rated"
export const Upcoming_Movie = "https://api.themoviedb.org/3/movie/upcoming"

export const TMDB_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const SEARCH_MOVIE_URL= "https://api.themoviedb.org/3/search/movie?query=";