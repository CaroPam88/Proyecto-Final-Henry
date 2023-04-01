import React from "react";
import style from './genders.module.css';
import { useFilter } from "../FilterBar/filterHook";
import {Link} from "react-scroll"

const GenderCard = () => {
  const {handlerFilter} = useFilter();
    return(
      <div className={style.cardRow}>
        <Link 
        className={style.cardM}
        to="cardContainer">
          <div  onClick={() => handlerFilter({target: { name: "genre", value: "Male"}})} >
          <span>Men´s Clothing</span>
        </div>
        </Link>
        <Link 
        className={style.cardW}
        to="cardContainer">
          <div  onClick={() => handlerFilter({target: { name: "genre", value: "Female"}})} >
          <span>Women´s Clothing</span>
        </div>
        </Link>
      </div>
    );
}


export default GenderCard;