import React from "react";
import style from './genders.module.css';
import {Link} from "react-router-dom";

const GenderCard = () => {

    return(
      <div className={style.cardRow}>
          <Link to={""}>
  <div className={style.cardM} href="/productos">
    <span>Men Wearing</span>
  </div>
          </Link>
          <Link to = {""}>
  <div className={style.cardW} href="/productos">
    <span>Woman Wearing</span>
  </div>
          </Link>
</div>
    )
}


export default GenderCard;