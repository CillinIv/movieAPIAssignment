import React, { useState,useContext } from "react";
import {AuthContext} from "../../contexts/authContext";
import {Button } from 'semantic-ui-react'
import {addToFavourites, getMovie} from '../../api/tmdb-api'
const useAuthContext = () => useContext(AuthContext);

const AddToFavoriteButton = ({ movie }) => {
  const [favorites, setFavorites] = useState([]);
  const authContext = useAuthContext();


  const handleAddToFavorite = e => {
    e.preventDefault();
    addToFavourites(authContext.userName,parseInt(movie.id));
    console.log("added movie :",movie.id," to user ",authContext.userName)
  };

  return (
    <Button inverted color='blue'
      onClick={handleAddToFavorite}
    >
      Add to Favorites
    </Button>
  );
} 

export default AddToFavoriteButton;