import React, { FunctionComponent } from 'react'
import { Movie } from '../../models/movie';

export const Card : React.FC<Movie> = (movie)=> {

    //console.log('*** respuesta--> ',movie)
    return (
        <div className="col-md-4">
        <div className="card animated fadeInUp">
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="card-img-top"
            width="100"
          />
          <div className="card-body">
            <h4>{`${movie.Title} (${movie.Year})`}</h4>
            <p>{`Type: ${movie.Type}`}</p>
          </div>
        </div>
      </div>
    )
}
