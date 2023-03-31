import { Hero } from "../../Components/Hero/Hero.jsx";
import Recomendados from "../../Components/Recomendados/Recomended.jsx";
import style from "./Home.module.css";
import { getAllProducts } from "../../Redux/ActionsGet.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer.jsx";
import imgHome from '../../Assets/img/hero3.jpg';
import  GenderCard  from "../../Components/Genders/GenderCards.jsx";
import { putClothes } from "../../Redux/ActionsGet.js";

export const Home = ()=>{

    const theUser = useSelector(state => state.user.theUser);//Nos traemos user para despues limitar que solo se ejecute la funcion si estamos loggeados.
    const currentPurechase = JSON.parse(localStorage.getItem('currentPurechase'));
    const dispatch = useDispatch();

    const update = window.location.href.includes("approved")
    const lastReference =  document.referrer;
    console.log('lastReference',lastReference);

    const stockController = async () => {
        if(theUser.id && update && currentPurechase){
            await dispatch(putClothes(currentPurechase))
            .then(window.localStorage.removeItem("currentPurechase"))
            
        }
    }

    useEffect (()=>{
        dispatch(getAllProducts())
        stockController()
        }, [dispatch, currentPurechase]);
    return(
        <div className={style.container}>
                <img src={imgHome} alt="" className={style.img} />
                <Hero />
                <GenderCard />
                <CardContainer/>
        </div>
    )
}
