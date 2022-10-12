import React from "react";
import {useParams} from "react-router-dom";

function MovieShow({movies}) {
    const params = useParams();
    // console.log(params)
  return (
    <div>
      <h3>Movies Show Component!</h3>
      <h2>{movies[params.movieId].title}</h2>
    </div>
  );
}

export default MovieShow;
