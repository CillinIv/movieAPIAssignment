import React, { useEffect, createContext, useReducer } from "react";
import { getMovies, getUpcomingMovies, getTrendingMovies, getTopRated } from "../api/tmdb-api";

export const MoviesContext = createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case "add-favorite":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        topRated: [...state.topRated],
        upcoming: [...state.upcoming],
        trending: [...state.trending],
      };

      case "add-favorite-upcoming":
      return {
        upcoming: state.upcoming.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        topRated: [...state.topRated],
        movies: [...state.movies],
        trending: [...state.trending],
      };

      case "add-favorite-toprated":
      return {
        topRated: state.topRated.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        upcoming: [...state.upcoming],
        movies: [...state.movies],
        trending: [...state.trending],
      };

      case "add-favorite-trending":
      return {
        trending: state.trending.map((m) =>
          m.id === action.payload.movie.id ? { ...m, favorite: true } : m
        ),
        topRated: [...state.topRated],
        movies: [...state.movies],
        upcoming: [...state.upcoming],
      };
    case "load":
      return { movies: action.payload.movies, upcoming: [...state.upcoming], trending: [...state.trending], topRated: [...state.topRated] };
    case "load-upcoming":
      return { upcoming: action.payload.upcoming, topRated: [...state.topRated], trending: [...state.trending], movies: [...state.movies] };
    case "load-trending":
      return { trending: action.payload.trending, movies: [...state.movies], topRated: [...state.topRated], upcoming: [...state.upcoming] };
    case "load-topRated":
      return { topRated: action.payload.topRated, movies: [...state.movies], trending: [...state.trending], upcoming: [...state.upcoming] };
    case "add-review":
      return {
        movies: state.movies.map((m) =>
          m.id === action.payload.movie.id
            ? { ...m, review: action.payload.review }
            : m
        ),
        upcoming: [...state.upcoming],
      };
    default:
      return state;
  }
};

const MoviesContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, { movies: [], upcoming: [], trending: [], topRated: [] });

  const addToFavorites = (movieId) => {
    const index = state.movies.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite", payload: { movie: state.movies[index] } });
  };

  const addReview = (movie, review) => {
    dispatch({ type: "add-review", payload: { movie, review } });
  };

  useEffect(() => {
    getMovies().then((movies) => {
      dispatch({ type: "load", payload: { movies } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

//------------------------UPCOMING---------------------------//
  const addToFavoritesUpcoming = (movieId) => {
    const index = state.upcoming.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-upcoming", payload: { movie: state.upcoming[index] } });
  };

  useEffect(() => {
    getUpcomingMovies().then((upcoming) => {
      dispatch({ type: "load-upcoming", payload: { upcoming } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //-----------------------TRENDING--------------------------//

  const addToFavoritesTrending = (movieId) => {
    const index = state.trending.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-trending", payload: { movie: state.trending[index] } });
  };

  useEffect(() => {
    getTrendingMovies().then((trending) => {
      dispatch({ type: "load-trending", payload: { trending } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  //----------------------TOPRATED---------------------------//

  const addToFavoritesToprated = (movieId) => {
    const index = state.topRated.map((m) => m.id).indexOf(movieId);
    dispatch({ type: "add-favorite-toprated", payload: { movie: state.topRated[index] } });
  };

  useEffect(() => {
    getTopRated().then((topRated) => {
      dispatch({ type: "load-topRated", payload: { topRated } });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        upcoming: state.upcoming,
        trending: state.trending,
        topRated: state.topRated,
        addToFavorites: addToFavorites,
        addToFavoritesUpcoming: addToFavoritesUpcoming,
        addToFavoritesToprated: addToFavoritesToprated,
        addToFavoritesTrending: addToFavoritesTrending,
        addReview: addReview,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;