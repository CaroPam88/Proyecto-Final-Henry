import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getProductDetail,
  clearProductDetailState,
} from "../../Redux/ActionsGet";
import { useEffect } from "react";
import style from "./Detail.module.css";
import { useDetail } from "./HooskDetailCarrito";
import MercadoPago from "../../Components/MercadoPago/MercadoPago"


const Detail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getProductDetail(id));
    return () => {
      dispatch(clearProductDetailState());
    };
  }, []);



  const myProduct = useSelector((state) => state.products.productDetail)

  const {
    pagar,
    compra,
    viewInput,
    viewInputValue,
		setViewInput,
		setViewInputValue,
    handlerSetViewValue,
    handlerDetail,
    buttonComprar,
    nuevoProducto,
    buttonAgregarAlCarrito,
    onSubmit,
  } = useDetail(myProduct, id);

  let stockSize = [];
  stockSize = myProduct.sizes?.flatMap(el => el.colors?.filter(color => color.color === nuevoProducto.color));
  let stock = stockSize?.map(el => el.stockColors);


return (
  <div className={style.container}>
<div className={style.detail}>
    <div >
      <img src={myProduct.image} alt="" className={style.img}/>
    </div>
    <div className={style.description}>
      <h3 className={style.name}>{myProduct.name}</h3>
      <h2 className={style.price}>$ {myProduct.price}</h2>
      {/* <ul>
        <br />
        <br />
      </ul> */}
      <div>
        {myProduct.sizes?.map((elem) => (
          <>
              <select
              className={style.select}
                name='color'
                onChange={(e) => handlerDetail(e)}
                id="colors"
              >
                {elem.colors.map((el) => (
                  <option value={el.color}>
                    {el.color}
                  </option>
                ))}
              </select>
            <select className={style.select} name="size" onChange={(e) => handlerDetail(e)}>
              <option value={elem.size}>
                {elem.size}
              </option>
            </select>
          </>
        ))}
      </div>
      <label className={style.label} htmlFor="cantidad">Unidades: </label>
      {stock && stock[0] 
      ? stock[0] > 6 
      ? <select className={style.select} name="cantidad" id="cantidad" onChange={(e) => {
        setViewInput(false);
        handlerDetail(e)
        }}>
          <option value="1">1 unidad</option>
          <option value="2">2 unidades</option>
          <option value="3">3 unidades</option>
          <option value="4">4 unidades</option>
          <option value="5">5 unidades</option>
          <option value="6">6 unidades</option>
          <option value="otherValue">Other value...</option>
        </select>
      : <select className={style.select} name="cantidad"  id="cantidad" onChange={(e) => handlerDetail(e)}>
          {[...Array(stock[0]+1).keys()].map((value, i) => (
            <option key={i} value={value}>{value}</option>
          ))}
        </select>
      : <label>No stock for selected color</label>
      }
      {viewInput && stock && stock[0]
      ? <input type='number' name="cantidad"  min={7} max={stock[0]} value={viewInputValue.cantidad} placeholder='Insert the value' onChange={(e) => {
        handlerSetViewValue(e);
        handlerDetail(e);
      }} />
      :<div></div>
      }
      {stock && stock[0] 
      ? <p className={style.p}>Stock: {stock}</p> 
      : <div></div> 
      }

      <div>
        {stock && stock[0] ? 
          (pagar) ? <button
          className={style.button}
          onClick={(e) => {
            onSubmit(e)
          }}
          
        >
          Comprar ahora
        </button> : <MercadoPago ids= {[nuevoProducto]} />
        : <div></div>
        } 
      </div>

      <div>
      {stock && stock[0] ? 
        <button className={style.button} onClick={(e) => buttonAgregarAlCarrito(e)} >Agregar al Carrito</button>
      : <button className={style.button}>Por favor Elige tus medidas y colores</button>
      
      }
      </div>

    </div>
    </div>
  </div>
);
    }
export default Detail;
