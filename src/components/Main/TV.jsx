import React from "react";
import Discover from "../tv/Trending";
import NowPlaying from "../tv/AiringToday";
import Popular from "../tv/Popular";
import TopRated from "../tv/TopRated";

const TV=()=>{

    return(

     <>
      <Discover/>
      <NowPlaying/>
      <Popular/>
      <TopRated/>
     </>
    )
};
export default TV;