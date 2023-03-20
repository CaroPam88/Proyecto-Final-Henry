import style from "./ofertas.module.css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import ofimg1 from '../../Assets/img/PantalonesHombres/Vintage.png';
import ofimg2 from '../../Assets/img/SUETER/SUETER/sueter-licrado-azul.jpg';
import ofimg3 from '../../Assets/img/pantalonesMujer/pantalones/pantalon1.png';
import { useState, useEffect } from "react";

export function Ofertas() {
  const ofertaimg = [ofimg1, ofimg2, ofimg3]
  const [ofertaData, setOfertaData] = useState([]);

  useEffect(() => {
    // Fetch 
    fetch('')
      .then(response => response.json())
      .then(data => setOfertaData(data));
  }, []);

  return (
    <div className={style.container}>
      <div className={style.swiperContainer}>
        <Swiper modules={[Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          slidesPerView={1}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.50": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@1.25": {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            "@1.50": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
            "@1.75": {
              slidesPerView: 1,
              spaceBetween: 25,
            },
          }}
        >
          {ofertaimg?.map((p, i) =>
          (
            <SwiperSlide className='swiper-slice' key={i}>
              <img className={style.ofertaimg} src={p} alt={"oferta-imagenes" + i} />
            </SwiperSlide>))},

          {ofertaData.map((item, i) => (
            <SwiperSlide className='swiper-slice' key={i}>
              <div className={style.card}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </SwiperSlide>
          ))}



        </Swiper>
      </div>
    </div>
  );
}