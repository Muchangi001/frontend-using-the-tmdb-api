import { useEffect, useState,useRef } from "react";

//custom hook
const useFetchData=(url,isMovies)=>{
    const [isLoaded,setIsLoaded]=useState(false);
    const [isLoading,setIsLoading]=useState(true);
    const [content,setMovies]=useState([]);
    const [errOccured,setErr]=useState(null);
    const error=useRef(null);
    const apiKey="91a7eeea6e733b77c3e8d9d7c41cc143";

    useEffect(()=>{
        fetch(`${url}${apiKey}&language=en-US&page=1`)
        .then(response=>{
            if(!response.ok){
                throw new Error("unable to fetch resources")
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
        const myContent=data.results.map(content=>{
        return(
            {
                backdrop:content.backdrop_path,
                poster:content.poster_path,
                name:content.name,
                title:content.title,
                overview:content.overview,
                id:content.id
            }
        )
        })
        setMovies(myContent)
      }
return [isLoaded,isLoading,content,errOccured,error.current]
}
export default useFetchData;