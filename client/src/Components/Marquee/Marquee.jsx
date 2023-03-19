import style from "./marquee.module.css";
import imgprod from "../../Assets/img/SUETER/SUETER/sueter-licrado-verde.jpg";

export const Marquee = () => {
    return(

        <div className={style.wrapper}>
            <div className={style.marquee}>
                <div className={style.innerMarquee}>
                    <img src={imgprod} alt="" />
                </div>
            </div>
        </div>
    )
}