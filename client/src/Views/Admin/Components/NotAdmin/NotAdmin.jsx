import { Link } from "react-router-dom";
import style from './NotAdmin.module.css';
import hero1 from '../../../../Assets/img/hero1.jpg'

const NotAdmin = () => {

    return(
        <div className = {style.cont}>
            <img src={hero1} alt={'Not Access'} className={style.found} />
            <div className ={style.div}>
                <h1  className ={style.h1}> You don't have access </h1>
            <Link to="/home" className={style.link}>
                <button className={style.button}>Redirect Home</button>
            </Link>
            </div>
        </div>
    )
}

export default NotAdmin;