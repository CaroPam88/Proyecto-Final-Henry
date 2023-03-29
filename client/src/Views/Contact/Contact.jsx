import React from "react";
import Map from "../../Mapa/Map"
import imgHome from '../../Assets/img/hero2.jpg';
import style from "../../Views/Contact/Contact.module.css"

const Contact = () =>{

    return(
        <div className="container mx-auto" style={{ backgroundImage: `url(${imgHome})` }}>
            <div className="row">
                <div className="col-6 ml-auto m-3">
                     <Map/>
                </div>
            <div className="col-5">
                <h1 className={style.titulo}>Comunicate con Nosotros</h1>
                <h2 className={style.p}>Descubre los mejores lugares cerca de ti con nuestro mapa interactivo.</h2>
            </div>
            </div>
        </div>

    )
}

export default Contact