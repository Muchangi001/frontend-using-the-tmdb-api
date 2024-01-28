import useFetchData from '../Main/fetchData';

const Discover = () => {
  const url=`https://api.themoviedb.org/3/discover/tv/?api_key=`
  const[isLoaded,isLoading,movies,errOccured,error]=useFetchData(url,false)
  return (
    <>
    <p className="upcoming-title">Discover</p>
    <div className="upcoming-parent-container h-72 overflow-auto flex">
        {isLoading && <div className="w-full h-full text-white flex items-center justify-center">Fetching tv...</div>}
        {errOccured&&<div className="w-full h-full text-white flex items-center justify-center">{error}</div>}
        {isLoaded&&!errOccured&&movies.map((movie, index) => (
        <div key={index} className="upcoming-container overflow-hidden h-full w-56 relative flex-shrink-0 rounded-2xl mx-3 " >
        <img  className="upcoming h-full w-full object-cover " src={`https://image.tmdb.org/t/p/original${movie.backdrop}`} alt={movie.title} />
        <div className="upcoming-details h-full w-full text-center  overflow-y-auto break-words whitespace-pre-line"><p className="text-center font-bold underline">{movie.title}</p><p>{movie.overview}</p></div>
        </div> 
        ))}
      </div>
    </>
  );
};

export default Discover;
