import { Link, useLocation } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css';

const NavBar = ()=>{
    const location = useLocation();
    const path = location.pathname;
    return(
        <div className={style.content}>
            <section>
                <h1>DressMe</h1>
            </section>
            <SearchBar></SearchBar>
            {path !== "/home" && <Link to ="/home">Home</Link>}
            {path !== "/form" &&  <Link to= "/form">Form</Link>}
        </div>
    )
}
export default NavBar;