import { Hero } from "../../Components/Hero/Hero.jsx";
import Recomendados from "../../Components/Recomendados/Recomended.jsx";
import style from "./Home.module.css";
import { getAllProducts } from "../../Redux/ActionsGet.js";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CardContainer from "../../Components/CardContainer/CardContainer.jsx";
import imgHome from '../../Assets/img/hero3.jpg';
import  GenderCard  from "../../Components/Genders/GenderCards.jsx";
// import { clearCurrentPurechase } from "../../Redux/actionCart.js";//importamos la action que limpia el producto o los productos comprado anteriormente con merccado pago.

export const Home = ()=>{
    // const theUser = useSelector(state => state.user.theUser);//Nos traemos user para despues limitar que solo se ejecute la funcion si estamos loggeados.
    // const currentPurechase = useSelector(state => state.cart.currentPurchase);//Nos traemos el array con los productos comprados recientemente. Puede ser uno o mas pero, siempre en array.
    // console.log(user);
    const dispatch = useDispatch()
    useEffect (()=>{
        dispatch(getAllProducts())
        // if(theUser.id) funcionDeUstedes(currentPurechase).then(() => dispatch(clearCurrentPurechase()))//Coprobamos que exista el usuario preguntando por su propiedad id, ejecutamos la funcion que envia los productos comprados a la db, si esto funciona, se limpia lo/s ultimo/s productos comprados.
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
