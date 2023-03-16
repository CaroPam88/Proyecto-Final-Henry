import logo from "";
import style from "./whatsapp.module.css";


const WhatsApp = () => {


    const Mensaje = () => {
        window.location.href = "";
        
    }

    return(
        <div className = {style.container} onClick={Mensaje}>
            <img src={logo} alt="" />
        </div>
    )
}

export default WhatsApp