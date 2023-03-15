import { Link, useLocation } from "react-router-dom"
import SearchBar from "../../Components/SearchBar/SearchBar";
import style from './NavBar.module.css';

const NavBar = ()=>{
    const location = useLocation();
    const path = location.pathname;
    return(
        <div className={style.content}>
            {path !== "/home" && <Link to ="/home">Home</Link>}
            {path !== "/form" &&  <Link to= "/form">Form</Link>}
            <section>
                <h1>ClothesApp</h1>
            </section>
            <SearchBar></SearchBar>
        </div>
    )
}
export default NavBar;