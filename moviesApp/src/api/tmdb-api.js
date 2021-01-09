

export const getMovies = () => {
  return fetch(
    '/api/movies',{headers:{
      'Authorization':window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};
  
  export const getMovie = id => {
    return fetch(
      `api/movies/${id}`
    ).then(res => res.json())
    .then(json => json.results);
  };
  
  export const getGenres = () => {
    return fetch(
      '/api/genres',{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
  };

  export const getMovieReviews = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getUpcomingMovies = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.REACT_APP_TMDB_KEY}&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getTrendingMovies = id => {
    return fetch(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };


  export const getTopRated = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const getSimilar = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };