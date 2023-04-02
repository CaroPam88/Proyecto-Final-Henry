import style from "./hero.module.css";
import React from 'react';
import imgHome from '../../Assets/img/hero3.jpg';


export function Hero() {
  return (
    <div className={style.hero}>
    <div className={style.heroInner}>
      <h1 className={style.heroTitle}>Dress Me</h1>
    </div>
  </div>
  
  );
}

