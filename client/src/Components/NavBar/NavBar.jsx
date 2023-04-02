import { Link, useLocation } from "react-router-dom"
import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import menu from '../../Assets/svg/menu.svg'
import carrito from '../../Assets/svg/carrito.svg';
import closemenu from '../../Assets/svg/closemenu.svg';
import logo from '../../Assets/svg/logo.svg';


import AuthenticationButton from '../../Authentication/Components/AuthenticationButton'
import { useFilter } from "../FilterBar/filterHook";


export const NavBar = () => {
  const cart = useSelector(state => state.cart?.cartItems ?? [])
  const localCart = useSelector(state => state.cart?.localStorageCart ?? [])
  const [clicked, setClicked] = useState(true);
  const menuopen = () => {
    setClicked(!clicked);
  };

  const location = useLocation()


  const { handlerFilter } = useFilter();

  return (
    <div className={style.container}>
      <div className={style.menu}>
        {clicked ? (
          <img src={menu} alt="icon nav" className={style.menuoff} onClick={menuopen}/>
        ) : (
          <img src={closemenu} alt="icon nav" className={style.menuoff} onClick={menuopen}/>
        )}
        <div
          className={`${style.containerOpciones} ${clicked ? style.opcioncerrada : null
            }`}
          onClick={() => setClicked(true)}
        >
          <ul
            className={`${style.opciones} ${clicked ? style.opcioncerrada : null
              }`}
          >
            {location.pathname !== '/home' && <li>
              <NavLink to="home" onClick={menuopen}>
                Home
              </NavLink>
            </li>}
            {location.pathname !== '/form' && <li>
              <NavLink to="/form" onClick={menuopen}>
                Form
              </NavLink>
            </li>}
            {location.pathname !== '/user/profile' && <li>
              <NavLink to="/user/profile" onClick={menuopen}>
                Profile
              </NavLink>
            </li>}
            {/* {location.pathname === '/home' && <li>
              
              <select name="genre" onChange={(e) => {
                handlerFilter(e);
                menuopen(e);
                }} className={style.selections} onClick={(e) => e.stopPropagation()} >
                <option value="" className={style.options} >Categories</option>
                <option value='Female' className={style.options} >Female</option>
                <option value='Male' className={style.options} >Male</option>
              </select>
            </li>} */}
            {location.pathname !== '/nosotros' && <li>
              <NavLink to="/nosotros" onClick={menuopen}>
                About Us
              </NavLink>
            </li>}
            <li>
              <AuthenticationButton/>
            </li>
          </ul>
        </div>
      </div>

      <div className={style.contenedorlogo}>
        <Link to="/home">
          <img src={logo} alt="logo" className={style.logo} />
        </Link>
      </div>

      <div className={style.search}><SearchBar></SearchBar></div>

      <div className={style.contenedorcarrito}>
        {cart && cart.length 
        ? <span className={style.span}>{cart.length}</span> 
        : <span className={style.span}>{localCart.length}</span> 
        }
        <Link to="/cart">
          <img src={carrito} alt="carrito" className={style.carrito} />
        </Link>
      </div>
    </div>
  );
};


export default SearchBar;
