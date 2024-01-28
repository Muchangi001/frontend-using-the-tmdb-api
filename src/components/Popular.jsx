import useFetchData from "./App/fetchData";

const Popular=()=>{
    const url=`https://api.themoviedb.org/3/movie/popular?api_key=`
    const[isLoaded,isLoading,movies,errOccured,error]=useFetchData(url)
    return(
        <div>
        <p className="popular-title">Popular</p>
        <div className="popular-parent-container overflow-x-auto flex">
        {isLoading && <div className="w-full h-full text-white flex items-center justify-center">Fetching movies...</div>}
        {errOccured&&<div className="w-full h-full text-white flex items-center justify-center">{error}</div>}
        {isLoaded&&!errOccured&&movies.map((movie,index)=>
        <div key={index} className="popular-container rounded-xl overflow-hidden h-full w-72 relative flex-shrink-0 mx-2" >
        <img  className="popular object-fill w-full " src={`https://image.tmdb.org/t/p/original${movie.poster}`} alt={movie.title} />
        <div className="popular-details h-full w-full text-center  overflow-y-auto break-words whitespace-pre-line"><p className="text-center font-bold underline">{movie.title}</p><p>{movie.overview}</p></div>
        </div>
         )}
        </div>
        </div>
    )
};
export default Popular;
