import useFetchData from "../../fetchData";
const TvTemp=({title,endpoint})=>{
    const  url=`https://api.themoviedb.org/3/${endpoint}`
    const[isLoaded,isLoading,tvs,errOccured,error]=useFetchData(url,false)
    return(
        <div>
        <p className="now-playing-title ml-1">{title}</p>
        <div  className="now-playing-parent-container overflow-x-auto flex">
        {isLoading && <div className="w-full h-full text-white flex items-center justify-center">Fetching tv...</div>}
        {errOccured&&<div className="w-full h-full text-white flex items-center justify-center">{error}</div>}
        {isLoaded&&!errOccured&&tvs.map((tv,index)=>
        <div key={index} className="now-playing-container rounded-xl w-72 h-full overflow-hidden relative flex-shrink-0 mx-2" >
        <img className="now-playing object-fill h-full w-full " src={`https://image.tmdb.org/t/p/original${tv.poster}`} alt={tv.name} />
        <div className="now-playing-details h-full w-full text-center  overflow-y-auto break-words whitespace-pre-line"><p className="text-center font-bold underline">{tv.name}</p><p>{tv.overview}</p></div>
        </div>
         )}
        </div>
        </div>
    )
};
export default TvTemp;