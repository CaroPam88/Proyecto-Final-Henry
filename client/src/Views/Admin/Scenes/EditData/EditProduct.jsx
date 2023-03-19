// import {Box} from "@mui/material";
// import Header from "../../AdminComponents/Headers";
// import {editProduct, getProductsById} from "";
// import {useParams} from "react-router-dom";
// import { useEffect } from "react";
// import { useState } from "react";


// const EditProduct = () => {

//     const {id} = useParams();
//     const [producto, setProducto] = useState();
//     useEffect(() =>{
//         getProductsById(setProducto, id)
//         console.log(producto);
//     }, [id])


//     const initialValues = {
//         id: producto?.id,
//         name: "",
//         price: "",
//         image: "",
//         gender: "",
//         color: [],
//         size: [],

//     };

//     return (

//             <div class="container">
//             <div class="header">
//                 <h1 class="title">EDIT PRODUCTS</h1>
//                 <p class="subtitle">Edit Product</p>
//             </div>
//             <div class="form-container">
//                 {producto ? <form class="form-product" action="" method="post">
//                 <input type="hidden" name="_method" value="put"/>
//                 <div class="form-field">
//                     <label class="form-label" for="name">Name:</label>
//                     <input class="form-input" type="text" name="name" id="name" value={producto.name}/>
//                 </div>
//                 <div class="form-field">
//                     <label class="form-label" for="description">ID</label>
//                     <textarea class="form-textarea" name="description" id="description">{producto.id}</textarea>
//                 </div>
//                 <div class="form-field">
//                     <label class="form-label" for="price">Price:</label>
//                     <input class="form-input" type="number" name="price" id="price" value={producto.price}/>
//                 </div>
//                 <div class="form-field">
//                     <button class="form-button" type="submit">{{text}}</button>
//                 </div>
//                 </form> : null}
//             </div>
//             </div>

//     )
// }


// export default EditProduct;