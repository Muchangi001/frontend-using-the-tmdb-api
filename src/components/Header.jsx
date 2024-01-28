import {Link} from "react-router-dom";


const Header=()=>{
return(
      <nav className="flex justify-around my-3 ">
        <Link to="/movies" className="text-white active:underline  hover:underline ml-0">Movies</Link>
        <Link to="/tv" className="text-white  hover:underline active:underline transition-all mx-10">TV</Link>
        <Link to="https://developer.themoviedb.org/reference/tv-series-latest-id" className="text-white  hover:underline active:underline transition-all mr-0">Source</Link>
      </nav>
)
}
export default Header;
