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
  //const id = props.match.params.id
  //const id = 1
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
    handlerDetail,
    buttonComprar,
    nuevoProducto,
    buttonAgregarAlCarrito,
    onSubmit,
  } = useDetail(myProduct, id);

  let stockSize = [];
  stockSize = myProduct.sizes?.flatMap(el => el.colors?.filter(color => color.color === nuevoProducto.color));
  let stock = stockSize?.map(el => el.stockColors);
  
  console.log('stock',stock);
  console.log('stockSize',stockSize);

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
        </ul>
        <div className={style.detail}>
          {myProduct.sizes?.map((elem) => (
            <>
                <select
                  name='color'
                  className={style.selectColors}
                  onChange={(e) => handlerDetail(e)}
                  id="colors"
                >
                  {elem.colors.map((el) => (
                    <option value={el.color} className={style.size}>
                      {el.color}
                    </option>
                  ))}
                </select>
              <select name="size" onChange={(e) => handlerDetail(e)}>
                <option value={elem.size} className={style.size}>
                  {elem.size}
                </option>
              </select>
            </>
          ))}
        </div>
        <label htmlFor="cantidad">units: </label>
        {stock && stock[0] 
        ? stock[0] > 6 
        ? <select name="cantidad" className={style.cantidad} id="cantidad" onChange={(e) => handlerDetail(e)}>
            <option value="1">1 unidad</option>
            <option value="2">2 unidades</option>
            <option value="3">3 unidades</option>
            <option value="4">4 unidades</option>
            <option value="5">5 unidades</option>
            <option value="6">6 unidades</option>
          </select>
        : <select name="cantidad" className={style.cantidad} id="cantidad" onChange={(e) => handlerDetail(e)}>
            {[...Array(stock[0]+1).keys()].map((value, i) => (
              <option key={i} value={value}>{value}</option>
            ))}
          </select>
        : <label>No stock for selected color</label>
        }
        {stock && stock[0] 
        ? <p>Stock: {stock}</p> 
        : <div></div> 
        }

        <div>
          {stock && stock[0] ? 
            (pagar) ? <button
            onClick={(e) => {
              onSubmit(e)
            }}
            className={style.botonComprar}
          >
            Comprar ahora
          </button> : <MercadoPago ids= {[nuevoProducto]} />
          : <div></div>
          } 
        </div>

        <div>
        {stock && stock[0] ? 
          <button className={style.botonCarrito} onClick={(e) => buttonAgregarAlCarrito(e)} >Add to cart</button>
        : <button className={style.botonCarrito} >You can't buy it</button>
        
        }
        </div>

      </div>

    </div>
  );
};


export default Detail;
