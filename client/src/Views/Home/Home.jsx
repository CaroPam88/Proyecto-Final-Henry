import { Hero } from "../../Components/Hero/Hero.jsx";
import { Ofertas } from "../../Components/Ofertas/Ofertas.jsx";
import Recomendados from "../../Components/Recomendados/Recomended.jsx";
import style from "./Home.module.css";
import { Marquee } from "../../Components/Marquee/Marquee.jsx";
import {NavBar} from "../../Components/NavBar/NavBar.jsx";
import Footer from "../../Components/Footer/Footer.jsx"
import { Card } from "../../Components/Card/Card.jsx";

export const Home = ()=>{
    return(
        <div className={style.container}>
                <Hero />
                <Footer />
        </div>
    )
}
