import style from "./index.module.css";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import ofimg1 from '.';
import ofimg2 from '';
import ofimg3 from '';


export function Ofertas(){
    const ofertaimg = [ofimg1, ofimg2, ofimg3]

    return(
        <div className={style.container}>
            <div className={style.swiperContainer}>
                <Swiper          modules={[Autoplay]}
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
                    {ofertaimg?.map((p, i)=>
                    (
                        <SwiperSlide className='swiper-slice' key={i}>
                            <img  className = {style.ofertaimg} src={p} alt={"oferta-imagenes"+i}/>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    );
}