import React from "react";
import tvs from "../../tv.json";
import TvTemp from "../tv/tvTemp";

const TV=()=>{

    return(
      tvs.map(tv=><TvTemp title={tv.title} endpoint={tv.endpoint}/>)
    )
};
export default TV;