import { useEffect } from "react";
import { getAllProducts, disableProduct } from "../../../../../Redux/ActionsGet";
import { useDispatch, useSelector } from "react-redux";
import style from './AllProducts.module.css'
import { Link } from "react-router-dom";
import hero3 from '../../../../../Assets/img/hero3.jpg';


const AllProducts = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    },[])
    const products = useSelector(state => state.products.filteredProducts);

    const handlerExisting = (e, id) => {
        dispatch(disableProduct(id))
        .then(() => dispatch(getAllProducts()))
        
    }

    return (<section>
        <img src={hero3} alt='found' className={style.found} />
        <table className={style['users-table']}>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Stock</th>
                    <th>Deshabilitado</th>
                    <th>Ver mas</th>
                </tr>
            </thead>
            <tbody>
                {products?.map((product, i) => {
                return <tr key={i}>
                    <td>
                    <img src={product.image} alt={product.name} />
                    </td>
                    <td>{product.name}</td>
                    <td>${product.price}</td>
                    <td>{product.stockGeneral}</td>
                    <td>
                        <label className={style.switch}>
                            <input type="checkbox" className={style.checkbox} name={i} checked={!product.existing} onChange={(e) => {handlerExisting(e, product.id)}}/>
                            <div className={style.slider}></div>
                        </label>
                    </td>
                    <td>
                        <Link to={`/admin/product/detail/${product.id}`}>Ver mas</Link>
                    </td>
                </tr>
                })}

            </tbody>
        </table>
    </section>
    )
}
export default AllProducts;