import { useDispatch } from "react-redux";
import { useState } from "react";
import { useSelector } from "react-redux";
import { putClothes } from "../../Redux/ActionsGet";


// const validate = (carrito) =>  {
//     let errors = {};

//     if (carrito.cantidad){
//         if(carrito.cantidad < 1 || 100) errors.cantidad = 'El minimo de compra es 1 y el maximo permitido por compra es 100 unidades';
//     }else{ errors.cantidad = 'Ingrese cantidad que desea comprar'}

//     if (!carrito.color){
//         errors.color = 'Ingrese color';
//     }
//     if (!carrito.talle){
//         errors.talle = 'Ingrese talle';
//     }
//     return errors;
//   }

// const PayCreate = () => {
//     const dispatch = useDispatch();

//     const detail = useSelector(state => state.productDetail);
//     const talle = useSelector(state => state.productDetail.talle);
//     const color = detail.sizes.map(el => el.size.colors.map(el => el.color))
//     const id = detail.id
//     const price = detail.price
//     const [errors, setErrors] = useState({});

//     const [carrito, setCarrito] = useState({
//         id: id,
//         talle: "",
//         color:"",
//         precio: price,
//         cantidad: 0,
//     })
//     // const [compra, setCompra] = useState({
//     //     id: 0,
//     //     talle: "",
//     //     color:"",
//     //     precio: 0,
//     //     cantidad: 0,
//     // })

//     function handleInputChange(e) {
//         setCarrito({
//             ...carrito,
//             [e.target.name]: e.target.value
//         });
//         setErrors(validate({
//             ...carrito,
//             [e.target.name]: e.target.value
//         }));
//     };

//     function handleSelectTalle(e){
//         if(!carrito.talle.includes(e.target.value))
//         setCarrito({
//             ...carrito,
//             talle: [...carrito.talle, e.target.value]
//         })
//           setErrors(validate({
//             ...carrito,
//             talle: [...carrito.talle, e.target.value]
//         }));
//     }

//     function handleSelectColor(e){
//         if(!carrito.color.includes(e.target.value))
//         setCarrito({
//             ...carrito,
//             color: [...carrito.color, e.target.value]
//         })
//           setErrors(validate({
//             ...carrito,
//             color: [...carrito.color, e.target.value]
//         }));
//     }

//     function handleSubmit(e) {
//         e.preventDefault();
//         if (Object.values(errors).length > 0) alert("Por favor rellenar todos los campos")
//         else {
//             dispatch()
//             alert('¡Enviado al carrito!')
//         }
//     };

//     return (
//         <div >
//             <div  />
//             <div >
//                 <div >
//                     <form onSubmit={e => handleSubmit(e)}>
//                          <div>
//                          <div>
//                             <label>Talle</label>
//                             <input type="array" value={carrito.color} name='talle' onChange={e => handleInputChange(e)} />
//                             {errors.talleId&& (
//                                 <p>{errors.talle}</p>
//                             )}
//                         </div>
//                         <select onChange={e => handleSelectTalle(e)}value='default'
//                             >
//                                 <option value="default" disabled>Elegir talle</option>
//                                 {
//                                     talle && talle.map(d => (
//                                         <option value={d.talle} key={d.id}>{d.talle}</option>
//                                     ))
//                                 }
//                             </select>
//                             {errors.talle&& (
//                                 <p style={{ float: 'right' }}>{errors.talle}</p>
//                             )}
//                         <div>
//                             <label>Color</label>
//                             <input type="array" value={carrito.color} name='color' onChange={e => handleInputChange(e)} />
//                             {errors.color&& (
//                                 <p>{errors.color}</p>
//                             )}
//                         </div>
//                            <select onChange={e => handleSelectColor(e)}value='default'>
//                                 <option value="default" disabled >Elegir color</option>
//                                 {
//                                     color && color.map(d => (
//                                         <option value={d.color} key={d.id}>{d.color}</option>
//                                     ))
//                                 }
//                             </select>
//                         </div>
//                         <div>
//                             <label>Cantidad</label>
//                             <input type="number" value={carrito.cantidad} name='cantidad' onChange={e => handleInputChange(e)} />
//                             {errors.cantidad&& (
//                                 <p>{errors.cantidad}</p>
//                             )}
//                         </div>
//                         <button type='submit'>Agregar al carrito</button>
//                     </form>

//                 </div>
//             </div>
//         </div>
//     )
//   };

//   export default PayCreate;

export const useDetail = (myProduct, id) => {
  const [error, setError] = useState({});
  const [compra, setCompra] = useState({
    id: id,
    size: "",
    color: "",
    price: "",
    cantidad: 1,
  });
  const [carrito, setCarrito] = useState([]);

  const dispatch = useDispatch();

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
    buttonComprar(e);
    setCarrito([
      ...carrito,
      {
        ...compra,
        id: myProduct.id,
        price: myProduct ? myProduct.price : "error",
      },
    ]);
    
  };
  console.log(carrito);

  return {
    error,
    compra,
    carrito,
    handlerCompraChange,
    buttonComprar,
    handlerColors,
    handlerCantidad,
    handlerSize,
    buttonAgregarAlCarrito,
  };
};
