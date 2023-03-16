import { Hero } from "../../Components/Hero/Hero";
import { Ofertas } from "../../Components/Ofertas/Ofertas";
import Recomendados from "../../Components/Recomendados/recomendados.jsx";
import style from "./index.module.css";
import { Marquee } from "../../Components/Marquee/marquee"


const Home = ()=>{
    return(
        <div className={style.container}>
            <Hero />
            <Marquee />
            <Ofertas />
            <Recomendados/>
        </div>
    )
}
export default Home;