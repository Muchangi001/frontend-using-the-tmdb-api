import { useEffect, useState,useRef } from "react";

//custom hook
const useFetchData=(url)=>{
    const [isLoaded,setIsLoaded]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    const [movies,setMovies]=useState([]);
    const [errOccured,setErr]=useState(null);
    const error=useRef(null);
    const apiKey="91a7eeea6e733b77c3e8d9d7c41cc143";

    useEffect(()=>{
        fetch(`${url}${apiKey}&language=en-US&page=1`)
        .then(response=>{
            if(!response.ok){
                throw new Error("unable to fetch movies")
             }
             return response.json()
            }
        )
        .then(data=>{
            handleUpComing(data)
            setIsLoading(false)
            setIsLoaded(true)
        })
        .catch(e=>{
            setErr(true)
            setIsLoading(false)
            setIsLoaded(false)
            error.current=e.message
        })
    },[url])

    

    const handleUpComing=(data)=>{
        //creating a new json data containing only the backdops,titles and overviews
        const movies=data.results.map(movie=>{
        return(
            {
                backdrop:movie.backdrop_path,
                poster:movie.poster_path,
                title:movie.title,
                overview:movie.overview,
                id:movie.id
            }
        )
        })
        setMovies(movies)
      }
return [isLoaded,isLoading,movies,errOccured,error.current]
}
export default useFetchData;