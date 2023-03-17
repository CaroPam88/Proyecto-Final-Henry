import React from "react";
import style from "./Footer.module.css";
import logo from ".././../Assets/svg/logo.svg";

const Footer = () => {
    return (
        <footer >
      <div class="row" >
        <div class="col-lg-2 col-sm-6">
          <div class="widget widget-about">
            <img src={logo} alt="" />
            <p className={style.p}>DressMe es un hermoso PF y tienda online de ropa, vestite acá!</p>
          </div>
        </div>

        <div class="col-lg-3 col-sm-6">
          
            <div class="nav-links">
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Comprá</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          
        </div>
        
      </div>

  </footer>

    );
  };
export default Footer;