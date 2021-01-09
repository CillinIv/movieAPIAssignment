import React, { useContext } from "react";
import {MoviesContext} from "../../contexts/moviesContext";
import { Button } from 'semantic-ui-react';

const AddToFavoriteButton = ({ movie }) => {
  const context = useContext(MoviesContext);

  const handleAddToFavorite = e => {
    e.preventDefault();
    context.addToFavoritesToprated(movie.id);
  };
  return (
    <Button secondary onClick={handleAddToFavorite} type = 'button'>Add to Favorites</Button>
  );
};

export default AddToFavoriteButton;