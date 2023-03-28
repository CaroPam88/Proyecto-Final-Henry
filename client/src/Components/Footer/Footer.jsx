import React from "react";
import style from "./Footer.module.css";
import logo from ".././../Assets/svg/logo.svg";

const Footer = () => {
    return (
        <footer >
      <div className="row" >
        <div className="col-lg-2 col-sm-6">
          <div className="widget widget-about">
            <img src={logo} alt="" className={style.img}/>
            <p className={style.p}>DressMe es un hermoso PF y tienda online de ropa, vestite acá!</p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6">
          
            <div className="nav-links">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Comprá</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a target= "_blank" href=" https://www.facebook.com/profile.php?id=100091284420748">Contact</a></li>
              </ul>
            </div>
          
        </div>
        
      </div>

  </footer>

    );
  };
export default Footer;