import React from "react";
import MovieTemp from "../movies/movieTemp";
import movies from "../../movies.json"
const Movies=()=>{

    return(
     movies.map(movie=><MovieTemp title={movie.title} endpoint={movie.endpoint}/>)
    )
};
export default Movies;