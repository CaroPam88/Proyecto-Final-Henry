import style from "./hero.module.css";
import React from 'react';
import imgHome from '../../Assets/img/hero3.jpg';


export function Hero() {
  return (
    <div className={style.hero}>
    <div className={style.heroInner}>
      <h1 className={style.heroTitle}>Dress Me</h1>
    </div>
    
    <div className={style.heroCards}>
      <div className={style.card}>
        <h2 className={style.cardTitle}>Card 1</h2>
        <p className={style.cardText}>This is the first card.</p>
      </div>

      <div className={style.card}>
        <h2 className={style.cardTitle}>Card 2</h2>
        <p className={style.cardText}>This is the second card.</p>
      </div>
    </div>
  </div>
  
  );
}

