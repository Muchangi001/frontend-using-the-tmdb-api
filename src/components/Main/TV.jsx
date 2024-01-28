import React from "react";
import Discover from "../tv/Discover";
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