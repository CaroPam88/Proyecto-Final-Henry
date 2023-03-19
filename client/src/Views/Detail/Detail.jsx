import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  clearProductDetailState,
} from "../../Redux/ActionsGet";
import { useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const dispatch = useDispatch();
  //const id = props.match.params.id
  //const id = 1
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => {
      dispatch(clearProductDetailState());
    };
  }, [dispatch, id]);

  const myProduct = useSelector((state) => state.products.productDetail);

  //function handleReset(){
  //dispatch(clearProductDetailState());
  //}

  return (

  // <div class="container">

  //   <div class="py-10">
  //     <div class="row">
  //       <div class="col-12 ml-8  wow fadeInUpSmall animated" data-wow-duration="1s" data-wow-delay=".2s">
  //         <p class="mb-3 fs-1" style="text-align: center; font-weight:600 ;">Professional Software Quality
  //           Assessment Application Testing Services </p>
  //         <h2 class="mb-3 font-weight-bold font-weight-900 fs-2" style="text-align: center; font-weight: 300;">
  //           Comprehensive testing solutions for your bussiness needs.</h2>
  //       </div>
  //     </div>
  <div>

      <div className={style.card}>
          <div class={style.cardImage}>
            <div className={style.cardBody}>
              <h2 className={style.cardTitle}>{myProduct.name}</h2>
                <img src={myProduct.image} alt="" />
              <p className={style.cardText}>{myProduct.itemName}</p>
              <p className={style.cardText}>{myProduct.itemName}</p>
              <p className={style.currentPrice}>{myProduct.price}</p>
              <ul>
    //                                 {myProduct.sizes?.map((size) => (
                                      <li>
                                        {size && (
                                          <>
                                            <h2>Tamaño: {size.size}</h2>
                                            <h2>Stock por tamaño: {size.stockSize}</h2>
                                            <h2>Colores:</h2>
                                            {size.colors &&
                                              size.colors.map((color) => (
                                                <p>
                                                  Color: {color.color} - Stock por color:{" "}
                                                  {color.stockColors}
                                                </p>
                                              ))}
                                          </>
                                        )}
                                      </li>
                                    ))}
                                  </ul>
                                  <button className={style.card__button}></button>


            </div>
          </div>




          </div>
          </div>
         




    // </div>
  // </div>
  // <div className={style.container}>
    //       <div className={style.imgContainer}>
    //                       <img src={myProduct.image} alt="god-of-war-figurine"/>
    //                   </div>

    //     <div class={style.textContainer}>
    //                   <h2 className={style.itemName}>{myProduct.name}</h2>
    //                   <div className={style.pricingAndCart}>
    //                       <div className={style.pricing}>
    //                           <p className={style.currentPrice}>{myProduct.price}</p>
    //                           <p className={style.currentPrice}>{myProduct.type}</p>
    //                           <p className={style.currentPrice}>{myProduct.stockGeneral}</p>
    //                           <h2 className={style.itemName}>Tamaños</h2>
    //                           <ul>
    //                                 {myProduct.sizes?.map((size) => (
    //                                   <li>
    //                                     {size && (
    //                                       <>
    //                                         <h4>Tamaño: {size.size}</h4>
    //                                         <h4>Stock por tamaño: {size.stockSize}</h4>
    //                                         <h4>Colores:</h4>
    //                                         {size.colors &&
    //                                           size.colors.map((color) => (
    //                                             <p>
    //                                               Color: {color.color} - Stock por color:{" "}
    //                                               {color.stockColors}
    //                                             </p>
    //                                           ))}
    //                                       </>
    //                                     )}
    //                                   </li>
    //                                 ))}
    //                               </ul>
    //                       </div>
    //                   </div>
    //               </div>
    //           </div>




  );
};
export default Detail;
