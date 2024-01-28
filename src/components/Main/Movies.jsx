import React from "react";
import UpComing from "../movies/UpComing";
import NowPlaying from "../movies/NowPlaying";
import Popular from "../movies/Popular";
import TopRated from "../movies/TopRated";

const Movies=()=>{

    return(
     <>
      <UpComing/>
      <NowPlaying/>
      <Popular/>
      <TopRated/>
     </>
    )
};
export default Movies;