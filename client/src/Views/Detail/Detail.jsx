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
import MercadoPago from "../../Components/MercadoPago/mercadoPago"
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



  const myProduct = useSelector((state) => state.products.productDetail);

  const {
    pagar,
    compra,
    handlerDetail,
    buttonComprar,
    nuevoProducto,
    buttonAgregarAlCarrito,
    onSubmit,
  } = useDetail(myProduct, id);


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
              <Link>
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
              </Link>
              <select name="size" onChange={(e) => handlerDetail(e)}>
                <option value={elem.size} className={style.size}>
                  {elem.size}
                </option>
              </select>
            </>
          ))}
        </div>

        <br />
        <label htmlFor="cantidad">Unidades</label>
        <select
          name="cantidad"
          className={style.cantidad}
          id="cantidad"
          onChange={(e) => handlerDetail(e)}
        >
          <option value="1">1 unidad</option>
          <option value="2">2 unidades</option>
          <option value="3">3 unidades</option>
          <option value="4">4 unidades</option>
          <option value="5">5 unidades</option>
          <option value="6">6 unidades</option>
        </select>

        <div>
          
         { (pagar) ? <button
            onClick={(e) => {
              onSubmit(e)
            }}
            className={style.botonComprar}
          >
            Comprar ahora
          </button> : <MercadoPago ids= {[nuevoProducto]} />} 
        </div>

        <div>
          <button className={style.botonCarrito} onClick={(e) => buttonAgregarAlCarrito(e)} >Agregar al carrito</button>
        </div>

      </div>

    </div>
  );
};


export default Detail;
