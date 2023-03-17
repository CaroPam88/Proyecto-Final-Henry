import logo from "../../Assets/svg/whatsapp.svg";
import style from "./whatsapp.module.css";


export const WhatsApp = () => {


    const Mensaje = () => {
        window.location.href = 'https://api.whatsapp.com/send?phone=+5491132379661&text=hola%20mi%20amor';
        
    }

    return(
        <div className = {style.container} onClick={Mensaje}>
            <img src={logo} alt="" />
        </div>
    )
}
