
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
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${process.env.REACT_APP_TMDB_KEY}`
    )
      .then(res => res.json())
      .then(json => json.results);
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
      ``
    )
      .then(res => res.json())
      .then(json => json.results);
  };

  export const addToFavourites = (username, id) => {
    return fetch(`api/users/${username}/favourites`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ id: id })
    }).then(res => res.json())
};

export const getFavourites = username => {
  return fetch(
    '/api/users/'+username+'/favourites',{headers:{
      'Authorization':window.localStorage.getItem('token')
    }
  }
  ).then(res => res.json());
};


  export const login = (username, password) => {
    return fetch('/api/users', {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};

export const signup = (username, password) => {
    return fetch(`/api/users?action=register`, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'post',
        body: JSON.stringify({ username: username, password: password })
    }).then(res => res.json())
};
