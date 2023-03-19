import { Hero } from "../../Components/Hero/Hero.jsx";
import { Ofertas } from "../../Components/Ofertas/Ofertas.jsx";
import Recomendados from "../../Components/Recomendados/Recomended.jsx";
import style from "./Home.module.css";
import { Marquee } from "../../Components/Marquee/Marquee.jsx";
import {NavBar} from "../../Components/NavBar/NavBar.jsx";
import Footer from "../../Components/Footer/Footer.jsx"
import { Card } from "../../Components/Card/Card.jsx";
import Detail from "../../Views/Detail/Detail";
import Filter from "../../Components/FilterBar/FilterBar";
import { getAllProducts } from "../../Redux/ActionsGet.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer.jsx";
import CardDetail from "../../Components/CardDetail/CardDetail.jsx";

export const Home = ()=>{
  const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(getAllProducts())
    }, [dispatch]);
    return(
        <div className={style.container}>
                <Hero />
                <CardContainer/>
                <Filter/>
                <Recomendados/>
        </div>
    )
}
