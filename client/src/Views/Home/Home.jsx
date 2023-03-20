import { Hero } from "../../Components/Hero/Hero.jsx";
import Recomendados from "../../Components/Recomendados/Recomended.jsx";
import style from "./Home.module.css";
import { getAllProducts } from "../../Redux/ActionsGet.js";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer.jsx";

export const Home = ()=>{
    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(getAllProducts())
    }, [dispatch]);
    return(
        <div className={style.container}>
                
                <Hero />
                <Recomendados />
                <CardContainer/>
        </div>
    )
}
