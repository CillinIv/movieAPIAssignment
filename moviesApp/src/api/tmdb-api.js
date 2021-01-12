
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
      `/api/movies/${id}`,{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json());
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
      `/api/movies/${id}/reviews/`,{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
  };

  export const getUpcomingMovies = () => {
    return fetch(
      `/api/movies/upcoming`,{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
  };

  export const getTrendingMovies = () => {
    return fetch(
      `/api/movies/trending`,{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
  };


  export const getTopRated = () => {
    return fetch(
      `/api/movies/toprated`,{headers:{
        'Authorization':window.localStorage.getItem('token')
      }
    }
    ).then(res => res.json())
  };

  export const getSimilar = id => {
    return fetch(
      `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
  };