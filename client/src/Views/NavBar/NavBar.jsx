import { Link } from "react-router-dom"

const NavBar = ()=>{
    return(
        <div>
            <Link to ="/Home">Home</Link>
            <br />  
            <Link to= "/Form">Form</Link>
        </div>
    )
}
export default NavBar;