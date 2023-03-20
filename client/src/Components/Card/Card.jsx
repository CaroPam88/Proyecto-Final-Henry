import { Link } from "react-router-dom";
import style from './card.module.css'
const Card = ({id, name, image, price}) => {
  return (
    <div className={style.card}>
      <img src={image}/>
      <div className={style.cardBody}>
      <p className={style.cardTitle}>{name}</p>
      <p className={style.cardText}>${price}</p>
      </div>
      <Link to={`/detail/${id}`}>
        <button className={style.viewButton}>View more</button>
      </Link>
    </div>
  );
};
export default Card;