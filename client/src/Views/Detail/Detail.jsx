import React from "react";
import { useParams } from "react-router-dom";
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

  return (
              <div className={style.container}>
              <h2>{myProduct.name}</h2>
                        <img src={myProduct.image} alt="" />
                        <p className={style.cardText}>{myProduct.itemName}</p>
                        <p className={style.cardText}>{myProduct.itemName}</p>
                        <p className={style.currentPrice}>{myProduct.price}</p>
          {myProduct.sizes?.map((size) => (
            <li>{size && (<> <h2 className= {style.purchaseInfo}>Tamaño: {size.size}</h2>
                            <h2>Stock por tamaño: {size.stockSize}</h2>
                            <h2>Colores:</h2>
                                        {size.colors &&
                                        size.colors.map((color) => (
                                          <p>Color: {color.color} - Stock por color:{" "} {color.stockColors}</p>
                                          ))}
                                      </>
                                    )}
                                  </li>
                                ))}

                                </div>
  )
};


// <div class = {style.cardWrapper}>
//   <div class = {style.card}>

//     <div class = {style.productImgs}>
//       <div class = {style.imgDisplay}>
//         <div class = {style.imgShowcase}>
//           <img src = {myProduct.image} alt = ""/>

//         </div>
//       </div>
//     <div class = {style.productContent}>
//       <h2 class = {style.productTitle}>{myProduct.name}</h2>
//       </div>

//       <div class = {style.productPrice}>
//         <p class = {style.lastPrice}>Price: <span>{myProduct.prince}</span></p>
//       </div>

//       <div class = {style.productDetail}>
//         <h2>about this item: </h2>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo eveniet veniam tempora fuga tenetur placeat sapiente architecto illum soluta consequuntur, aspernatur quidem at sequi ipsa!</p>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, perferendis eius. Dignissimos, labore suscipit. Unde.</p>
//         <ul>
//           <li>Color: <span>{color.color}</span></li>
//           <li>Available: <span>{color.stockColors}</span></li>
//           <li>Shipping Area: <span>All over the world</span></li>
//           <li>Shipping Fee: <span>Free</span></li>
//         </ul>
//       </div>

//       <div class = {style.p}>
//         <input type = "number" min = "0" value = "1"/>
//         <button type = "button" class = "btn">
//           Add to Cart <i class = "fas fa-shopping-cart"></i>
//         </button>
//         <button type = "button" class = "btn">Compare</button>
//       </div>
//     </div>
//   </div>
// </div>


export default Detail;
