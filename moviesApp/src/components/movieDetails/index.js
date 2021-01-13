import React, { useState, useEffect } from "react";
import "./movieDetails.css";
import { Button, Icon, Label, Menu, Table } from 'semantic-ui-react';
import {getSimilar} from '../../api/tmdb-api.js';
import Movie from '../movieCardSimilar';
import { Card } from 'semantic-ui-react'

export default ({ movie }) => {

  const [similarMovies, setSimilar] = useState([]);

  function sleep(ms){
    while(ms < 100){
      ms++;
    }
    reloadMovieCards();
  }

  console.log(getSimilar(Movie.id));
  useEffect(() => {
    getSimilar(movie.id).then(similarMovies => {
      setSimilar(similarMovies);
    });
  }, []);
  
  
  function sleep(ms){
    while(ms < 100){
      ms++;
    }
    console.log("Reloading...")
    reloadMovieCards();
  }

  //console.log(similarMovies);
  console.log(movie);
  const movieCards = similarMovies.map(m => (
    <Movie key={m.id} movie={m}/>
  ));
  
  function reloadMovieCards(){
    console.log(movie.id);
    getSimilar(movie.id).then(similarMovies => {
      setSimilar(similarMovies);
    });
  }

  return (
    <>
      <Table celled>
      <Table.Body>
      <Table.Row>
        <Table.HeaderCell>Runtine (min.)  <Icon name = 'clock' color = 'grey' /></Table.HeaderCell>
        <Table.Cell>{movie.runtime}</Table.Cell>
      </Table.Row>
    <Table.Row>
        <Table.HeaderCell>Release Date  <Icon name = 'calendar' color = 'grey' /></Table.HeaderCell>
        <Table.Cell>{movie.release_date}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Overview <Icon name = 'book' color = 'grey' /></Table.HeaderCell>
        <Table.Cell>{movie.overview}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Genres  <Icon name = 'list' color = 'grey' /></Table.HeaderCell>
        <Table.Cell>{movie.genre_ids.map(g => (
          <li key={movie.genre_ids} className="list-group-item">
            {movie.genre_ids}
            <br></br>
          </li>
        ))}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Spoken Languages <Icon name = 'talk' color = 'grey' /></Table.HeaderCell>
        <Table.Cell>{movie.spoken_languages.map(lang => (
          <li key={lang.name} className="list-group-item">
            {lang.name}
          </li>
        ))}</Table.Cell>
      </Table.Row>
    
    </Table.Body>
  </Table>
  <br></br>
  
  <h2>Similar Movies <Button hidden onclick = {sleep(0)} secondary><Icon name = 'history' color = 'grey' />Refresh Similar Movies</Button></h2>
  <br></br>
  <Card.Group >
    
  {movieCards} 
  </Card.Group>
    </>
  );
};