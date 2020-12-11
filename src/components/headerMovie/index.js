import React from "react";
import { Icon } from 'semantic-ui-react';

const MovieHeader = ({ movie }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h2>
        <a href={movie.homepage}>
          <Icon name = 'home' color = 'grey' />
          </a>
          {"  "}
          {movie.title}
        </h2>
      </div>
    </div>
  );
};

export default MovieHeader;