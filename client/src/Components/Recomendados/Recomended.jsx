import 'swiper/css';
import style from "./recomended.module.css";
import img1 from "../../Assets/img/PantalonesHombres/Vintage.png";
import img2 from "../../Assets/img/SUETER/SUETER/sueter-camuflaje-en-color-rojo.jpg";
import img3 from "../../Assets/img/short2/short2/short_nike.png";




function Recomendados() {
  return (

      
      <div className={style.container}>
        <h2 className={style.centerTitle}>Products based in your interests</h2>
        <div className={style.center}>
          <div className={style.articleCard}>
            <div className={style.content}>
              <p className={style.title}>Pants / Cargo</p>
            </div>
            <img src={img1} alt="" />
          </div>

          <div className={style.articleCard}>
            <div className={style.content}>
              <p className={style.title}>Shirts</p>
            </div>
            <img src={img2} alt="" />
          </div>

          <div className={style.articleCard}>
            <div className={style.content}>
              <p className={style.title}>Shorts</p>
            </div>
            <img src={img3} alt="" />
          </div>

          <div className={style.articleCard}>
            <div className={style.content}>
              <p className={style.title}>Shirts</p>
            </div>
            <img src={img1} alt="" />
          </div>
          
        </div>
      </div>


      
  );
}

export default Recomendados;