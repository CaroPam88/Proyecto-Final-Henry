import style from "./Nosotros.module.css";
import { ReactComponent as GithubIcon } from "../Nosotros/Iconos/github.svg";
import { ReactComponent as LinkedInIcon } from "../Nosotros/Iconos/linkedin.svg";

const Nosotros = () => {
  return (
    <div className={style.container}>
      <div className={style.card}>
        <img
          className={style.img}
          src={
            "https://media.licdn.com/dms/image/D4D03AQFIuG_pDEjZrA/profile-displayphoto-shrink_800_800/0/1675386330967?e=1685577600&v=beta&t=8Gd1QnNoOAI05kYt1r0pHzSW4HvTQv_fLvSMQxgZG1k"
          }
          alt=""
        />
        <h3 className={style.h3}>Carolina Ramirez</h3>
        <h4 className={style.h4}>
          <a href="https://github.com/CaroPam88">
            <GithubIcon className={style.icon} />
          </a>
          <a href="https://www.linkedin.com/in/carolina-ramirez-a567b1171/">
            <LinkedInIcon className={style.icon} />
          </a>
        </h4>
      </div>

      <div className={style.card}>
        <img
          className={style.img}
          src={
            "https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcT2xYTv3ig7zGLvs0ABliV1ZMWG-0waOX_P6nd03SJnDLVoTiSnvuCMJ-dNpQhhYXTC"
          }
          alt=""
        />
        <h3 className={style.h3}>Franco Ortellado</h3>
        <h4 className={style.h4}>
          <a href="https://github.com/Franco-ortellado">
            <GithubIcon className={style.icon} />
          </a>
          <a href="https://www.linkedin.com/in/franco-ortellado-b0a861201/">
            <LinkedInIcon className={style.icon} />
          </a>
        </h4>
      </div>

      <div className={style.card}>
        <img
          className={style.img}
          src={
            "https://upload.wikimedia.org/wikipedia/pt/0/0b/Robert_Downey_Jr._como_Tony_Stark_em_Avengers_Infinity_War.jpg"
          }
          alt=""
        />
        <h3 className={style.h3}>Patricio Rodríguez</h3>
        <h4 className={style.h4}>
          <a href="https://github.com/1PatoRod">
            <GithubIcon className={style.icon} />
          </a>
          <a href="https://www.linkedin.com/in/pato-e-rodriguez/">
            <LinkedInIcon className={style.icon} />
          </a>
        </h4>
      </div>
     

      <div className={style.card}>
        <img
          className={style.img}
          src={
            "https://hips.hearstapps.com/hmg-prod/images/gettyimages-1204486984.jpg"
          }
          alt=""
        />
        <h3 className={style.h3}>Ezequiel Sortano</h3>
        <h4 className={style.h4}>
          <a href="https://github.com/sortanoezequiel">
            <GithubIcon className={style.icon} />
          </a>
          <a href="https://www.linkedin.com/in/ezequiel-sortano-43446922a/">
            <LinkedInIcon className={style.icon} />
          </a>
        </h4>
      </div>


      <div className={style.card}>
        <img
          className={style.img}
          src={
            "https://media.licdn.com/dms/image/D4E35AQF0CBhA2l_pxQ/profile-framedphoto-shrink_800_800/0/1679669930046?e=1680642000&v=beta&t=RxxqAuukoaK5qDIKThxd1JuijgLwvu9n-2pEpIWCD-k"
          }
          alt=""
        />
        <h3 className={style.h3}>Alex Serna</h3>
        <h4 className={style.h4}>
          <a href="https://github.com/sernapereira">
            <GithubIcon className={style.icon} />
          </a>
          <a href="https://www.linkedin.com/in/alexander-serna-pereira-4759b921a/">
            <LinkedInIcon className={style.icon} />
          </a>
        </h4>
      </div>

      <div className={style.card}>
        <img
          className={style.img}
          src={
            "https://m.media-amazon.com/images/M/MV5BMTQ4NjIyODA5MV5BMl5BanBnXkFtZTcwNzE2NTc0Mg@@._V1_UY1200_CR585,0,630,1200_AL_.jpg"
          }
          alt=""
        />
        <h3 className={style.h3}>Thomas Gómez</h3>
        <h4 className={style.h4}>
          <a href="https://github.com/n3-n2-n1">
            <GithubIcon className={style.icon} />
          </a>
          <a href="https://www.linkedin.com/in/">
            <LinkedInIcon className={style.icon} />
          </a>
        </h4>
      </div>

      <div className={style.card}>
        <img
          className={style.img}
          src={
            "https://media.licdn.com/dms/image/D4E35AQG-YaslKCau3w/profile-framedphoto-shrink_800_800/0/1677728475942?e=1680703200&v=beta&t=-WIsHNzx8CY6NECMpo8GKErIcpnyHzUdbDeZ5D1Mnko"
          }
          alt=""
        />
        <h3 className={style.h3}>Christian Taboada</h3>
        <h4 className={style.h4}>
          <a href="https://github.com/christiantaboada">
            <GithubIcon className={style.icon} />
          </a>
          <a href="https://www.linkedin.com/in/christian-taboada/">
            <LinkedInIcon className={style.icon} />
          </a>
        </h4>
      </div>
    </div>
  );
};

export default Nosotros;
