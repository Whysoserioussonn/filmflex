const key = process.env.REACT_APP_IMDB_API_KEY
const requests = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/trending/all/day?api_key=${key}`,
  requestSpooky: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=27`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&language=en-US&page=1`,
  requestAction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=28`,
  requestAnimation: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=16`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=35`,
  requestFamily: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10751`,
  requestMystery: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=9648`,
  requestRomance: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10749`,
  requestScienceFiction: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=878`,
  requestTVMovie: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10770`,
  requestWar: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10752`,
  requestWestern: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=37`,
  requestDrama: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=18`,
  requestMusic: `https://api.themoviedb.org/3/discover/movie?api_key=${key}&with_genres=10402`,

};

export default requests

