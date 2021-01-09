import React from "react";
import { Link } from "react-router-dom";
import "./movieCard.css";
import "../../globals/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Card, Icon, Image, Segment, Container, Header} from 'semantic-ui-react';

const MovieCard = ({movie}) => {

  return (
    <Card>
      <br></br>
    <Link to={`/movies/${movie.id}`}>
    <Image rounded 
        className="card-img-tag center "
        alt={movie.title}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "./film-poster-placeholder.png"
        }
      /></Link>
    <Card.Content>
      <Card.Header>{movie.title}</Card.Header>
      <Card.Meta> <Icon name = 'calendar' />{movie.release_date}</Card.Meta>
      <Card.Description>
      <Icon name = 'star' />{movie.vote_average}
      </Card.Description>
    </Card.Content>
  </Card>
  );
};

export default MovieCard;