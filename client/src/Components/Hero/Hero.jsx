import style from "./index.module.css";

export function Hero() {

    return (
        <div className={style.container}>

            <div className={style.containerInner}>
                <h1>Vestite con nosotros!</h1>
            </div>

            <div className={style.img}>
                <img src={imgHome} alt="" />
            </div>
        </div>
    )
} 
