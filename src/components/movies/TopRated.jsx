import useFetchData from "../Main/fetchData";

const TopRated=()=>{
    const url=`https://api.themoviedb.org/3/movie/top_rated?api_key=`
    const[isLoaded,isLoading,movies,errOccured,error]=useFetchData(url,true)
    return(
        <div>
        <p className="top-rated-title">Top Rated</p>
        <div className="top-rated-parent-container overflow-x-auto flex">
        {isLoading && <div className="w-full h-full text-white flex items-center justify-center">Fetching movies...</div>}
        {errOccured&&<div className="w-full h-full text-white flex items-center justify-center">{error}</div>}
        {isLoaded&&!errOccured&&movies.map((movie,index)=>
        <div key={index} className="top-rated-container rounded-xl overflow-hidden w-72 h-full relative flex-shrink-0 mx-2" >
        <img  className="top-rated object-fill h-full w-full" src={`https://image.tmdb.org/t/p/original${movie.poster}`} alt={movie.title} />
        <div className="top-rated-details h-full w-full text-center  overflow-y-auto break-words whitespace-pre-line"><p className="text-center font-bold underline">{movie.title}</p><p>{movie.overview}</p></div>
        </div>
         )}
        </div>
        </div>
    )
};
export default TopRated;