import { Hero } from "../../Components/Hero/Hero.jsx";
import Recomendados from "../../Components/Recomendados/Recomended.jsx";
import style from "./Home.module.css";
import { getAllProducts } from "../../Redux/ActionsGet.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer.jsx";
import imgHome from '../../Assets/img/hero3.jpg';
import  GenderCard  from "../../Components/Genders/GenderCards.jsx";
import { getLocalCart } from '../../Redux/actionCart.js'

export const Home = ()=>{
    const theUser = useSelector(state => state.user.theUser);
    // console.log(user);
    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(getAllProducts())
        if(theUser.id) dispatch(getLocalCart())
    }, [dispatch]);
    return(
        <div className={style.container}>
                <img src={imgHome} alt="" className={style.img} />
                <Hero />
                <GenderCard />
                <CardContainer/>
        </div>
    )
}
