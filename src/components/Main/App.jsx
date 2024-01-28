import {Route,Routes} from "react-router-dom";
import Movies from "./Movies"
import TV from "./TV"
import Header from "../Header";

const App=()=>{
    return(
        <>
        <Header/>
        <Routes>
            <Route path="/" element={<Movies/>}/>
            <Route path="/movies" element={<Movies/>}/>
            <Route path="/tv" element={<TV/>}/>
        </Routes>
        </>
    )
}
export default App;