import {Link} from "react-router-dom";


const Header=()=>{
return(
      <nav className="flex justify-evenly ">
        <Link to="/movies" className="text-white underline hover:no-underline">Movies</Link>
        <Link to="/tv" className="text-white underline hover:no-underline transition-all">TV</Link>
        <Link to="https://developer.themoviedb.org/reference/tv-series-latest-id" className="text-white underline hover:no-underline transition-all">Source</Link>
      </nav>
)
}
export default Header;
