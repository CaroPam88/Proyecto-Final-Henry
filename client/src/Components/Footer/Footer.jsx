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
            <p className={style.p}>DressMe is a beautiful Final Proyect & Clothe´s Ecommerce, Dress here❤️</p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6">
          
            <div className="nav-links">
              <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/cart">Cart</a></li>
                <li><a href="/nosotros">About Us</a></li>
                <li><a href="/Contact">Locals</a></li>
                <li><a target= "_blank" href=" https://www.facebook.com/profile.php?id=100091284420748">Contact</a></li>
              </ul>
            </div>
          
        </div>
        
      </div>

  </footer>

    );
  };
export default Footer;
