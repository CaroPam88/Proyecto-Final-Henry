import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { putClothes } from "../../Redux/ActionsGet";
import { addProductUser } from "../../Redux/actionUser";
import { addCartProduct } from "../../Redux/actionCart";
 
export const useDetail = (myProduct, id) => {
 
  const [compra, setCompra] = useState({  
    id: id,
    name: myProduct.name,
    price: myProduct.price,
    color: '',
    size: '',
    cantidad: 1,
  });
 
  const dispatch = useDispatch();
  const userSelector = useSelector(state => state.user.theUser)
  const cart = useSelector(state => state.cart.cartItems)

  const saveLocal= (cart)=>{
    localStorage.setItem("cart", JSON.stringify(cart));
  }
  

  const handlerDetail = (e) => {
    const target = e.target.name;
    const value = e.target.value;
    target === 'cantidad' 
    ? setCompra({
      ...compra,
      cantidad: Number(e.target.value),
    })
    : setCompra({
      ...compra,
      [target] : value,
    });
  }
 
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
      name: myProduct.name,
      price: myProduct.price,
      color: compra.color === '' ? colores[0] : compra.color,
      size: compra.size === '' ? talla[0] : compra.size,
      cantidad: compra.cantidad,
    };
    dispatch(addCartProduct(nuevoProducto)); // dispatch addToCart action creator
    if(!userSelector.length) saveLocal([...cart, nuevoProducto]);
    else dispatch(addProductUser(nuevoProducto, userSelector.id))
  };
  
  const elCarrito = useSelector(state => state.cart.cartItems)// aca estoy
  console.log(elCarrito);

  const [pagar, setPagar] = useState(true)
  const onSubmit = async (e) => {
    e.preventDefault()
    setPagar(false)
  }
 
  return {
    pagar,
    compra,
    buttonComprar,
    handlerDetail,
    buttonAgregarAlCarrito,
    onSubmit,
  };
};
