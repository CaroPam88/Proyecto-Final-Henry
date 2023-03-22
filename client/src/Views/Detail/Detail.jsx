import React from "react";
import { useParams, Link } from "react-router-dom";
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
  console.log( myProduct.sizes?.map((elem) => elem.colors.map(elem => elem.color)));
  console.log(myProduct);
  
  return (
    
    <div className={style.container}>
   
      
      <div className={style.containerImg}>
        <img src={myProduct.image} alt="" className={style.img} />
      </div>
      
     
      <div className={style.containerInfo}>
        <h1>{myProduct.name}</h1>
        <h4 className={style.currentPrice}>$ {myProduct.price}</h4>
        <ul>
        <br />
        <br />
        <h6>{ myProduct.sex?.map(el => el).join(" - ")}</h6>
        </ul>
        <div className={style.detail}>
     
     {  myProduct.sizes?.map((elem) => 
      <>
       <Link >
        <li key={myProduct.id} className={style.size}>{elem.size}</li>
        <li key={myProduct.id} className={style.size}>{elem.size}</li>
        <li key={myProduct.id} className={style.size}>{elem.size}</li>
        <li key={myProduct.id} className={style.size}>{elem.size}</li>
        </Link>
       <div>
 
       </div>
       <Link>
       {elem.colors.map(el => 
         <li className={style.size} >{el.color}</li>
         )}
       </Link>
       
      </>
     
      
       )}
     </div>
      </div>
         
    
      
    </div>
  );
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
