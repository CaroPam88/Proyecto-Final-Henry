
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../thema";


const TopBar = () => {

    return(
      <div class="container">
      <div class="search">
        <input type="text" placeholder="Search"/>
        <button type="button"><i class="fas fa-search"></i></button>
      </div>
      <div class="icons">
        <button><i class="fas fa-moon"></i></button>
        <button><i class="fas fa-bell"></i></button>
        <button><i class="fas fa-cog"></i></button>
        <button><i class="fas fa-user"></i></button>
      </div>
    </div>
    
    );
};


export default TopBar;