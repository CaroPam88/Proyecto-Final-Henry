import { useEffect } from "react";
import { getAllProducts } from "../../../../../Redux/ActionsGet";
import { useDispatch, useSelector } from "react-redux";
import CartProduct from "../../../Components/CardProduct/CardProduct";
import style from './AllProducts.module.css'


const AllProducts = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllProducts());
    },[])
    const products = useSelector(state => state.products.filteredProducts)

    return (
        <section className={style.content}>
            {products?.map((el, i) => <CartProduct key={i} id={el.id} name={el.name} image={el.image} stockGeneral={el.stockGeneral} price={el.price} />)}
        </section>
    )
}
export default AllProducts;