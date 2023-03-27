import React from "react";
import style from './genders.module.css';
import { useFilter } from "../FilterBar/filterHook";

const GenderCard = () => {
  const {handlerFilter} = useFilter();
    return(
      <div className={style.cardRow}>
        <label className={style.cardM}>
          <input type="radio" name="genre" value="Male" onClick={e => handlerFilter(e)} />
          <span>Men Wearing</span>
        </label>
        <label className={style.cardW}>
          <input type="radio" name="genre" value="Female" onClick={e => handlerFilter(e)} />
          <span>Woman Wearing</span>
        </label>
      </div>
    );
}


export default GenderCard;