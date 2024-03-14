import useFetchData from "../../fetchData";
const MovieTemp=({title,endpoint})=>{
    const  url=`https://api.themoviedb.org/3/movie/${endpoint}`
    const[isLoaded,isLoading,movies,errOccured,error]=useFetchData(url,true)
    return(
        <div>
        <p className="now-playing-title ml-1">{title}</p>
        <div  className="now-playing-parent-container overflow-x-auto flex">
        {isLoading && <div className="w-full h-full text-white flex items-center justify-center">Fetching movies...</div>}
        {errOccured&&<div className="w-full h-full text-white flex items-center justify-center">{error}</div>}
        {isLoaded&&!errOccured&&movies.map((movie,index)=>
        <div key={index} className="now-playing-container rounded-xl w-72 h-full overflow-hidden relative flex-shrink-0 mx-2" >
        <img className="now-playing object-fill h-full w-full " src={`https://image.tmdb.org/t/p/original${movie.poster}`} alt={movie.title} />
        <div className="now-playing-details h-full w-full text-center  overflow-y-auto break-words whitespace-pre-line"><p className="text-center font-bold underline">{movie.title}</p><p>{movie.overview}</p></div>
        </div>
         )}
        </div>
        </div>
    )
};
export default MovieTemp;