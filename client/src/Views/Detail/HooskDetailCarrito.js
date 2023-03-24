import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import { putClothes } from "../../Redux/ActionsGet";
import { addProductUser } from "../../Redux/actionUser";




export const useDetail = (myProduct, id) => {

  const [error, setError] = useState({});
  const [compra, setCompra] = useState({  
    id: id,
    price: myProduct.price,
    color: '',
    size: '',
    cantidad: 1,
  });
  
  
  const [carrito, setCarrito] = useState([]);
  

  const dispatch = useDispatch();
  const userSelector = useSelector(state => state.user.theUser)
  

  //CON ESTA FUNCION SETEAMOS EL ITEM, PODEMOS REFRESCAR LA PAGINA, Y VAN A PERMANECER
  //EN EL LOCAL STORAGE PERO SE VAN A BORRAR DEL CARRITO
  //FUNCION SET ITEM
  const saveLocal= ()=>{
    localStorage.setItem("carrito", JSON.stringify(carrito))
  }

  //FUNCION GET ITEM
  let carritoLocal = JSON.parse(localStorage.getItem("carrito"))

  
  const handlerCompraChange = (e) => {
    const { name, value } = e.target;
    setCompra({
      ...compra,
      [name]: value,
    });
  };

  const handlerColors = (e) => {
    setCompra({
      ...compra,
      color: e.target.value,
    });
  };

  const handlerCantidad = (e) => {
    setCompra({
      ...compra,
      cantidad: Number(e.target.value),
    });
  };

  const handlerSize = (e) => {
    setCompra({
      ...compra,
      size: e.target.value,
    });
  };

  const buttonComprar = (e) => {
    setCompra({
      ...compra,
      id: myProduct.id,
      price: myProduct ? myProduct.price : "error",
    });
    dispatch(putClothes(compra))
    alert ("compra exitosa")
  };
  
  const buttonAgregarAlCarrito = (e) => {
    const colores = myProduct ? myProduct.sizes?.flatMap(el => el.colors[0].color): 'no colors';
    const talla = myProduct ? myProduct.sizes?.flatMap(el => el.size) : 'no sizes found';
    const nuevoProducto = {
      ...compra,
      id: myProduct.id,
      price: myProduct.price,
      color: compra.color === '' ? colores[0] : compra.color,
      size: compra.size === '' ? talla[0] : compra.size,
      cantidad: compra.cantidad,
    };
    setCarrito([...carrito, nuevoProducto]);
    dispatch(addProductUser(nuevoProducto, userSelector.id))
    saveLocal()
  };

  const [pagar, setPagar] = useState(true)
  const onSubmit = async (e) => {
    e.preventDefault()
    setPagar(false)
  }



  return {
    pagar,
    error,
    compra,
    carrito,
    handlerCompraChange,
    buttonComprar,
    handlerColors,
    handlerCantidad,
    handlerSize,
    buttonAgregarAlCarrito,
    onSubmit,
  };
};
