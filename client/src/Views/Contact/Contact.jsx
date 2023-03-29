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
                <h2 className={style.subtitulo}>Descubre los mejores lugares cerca de ti con nuestro mapa interactivo.</h2>
                <h3 className={style.h3}>Horario de Atencion</h3>
                <p className={style.p}>Lunes a Viernes de 10:00 a 20:00 hs.</p>
                <h3 className={style.h3}>Encontranos en Nuestros Locales:</h3>
                <ul className={style.p}>
                    <li>Av.Corrientes 400</li>
                    <li>Florida 100</li>
                    <li>Av.Cordoba 550</li>
                </ul>
            </div>
            </div>
        </div>

    )
}

export default Contact