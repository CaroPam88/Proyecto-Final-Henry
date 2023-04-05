import { useEffect } from "react";
import { getAllProducts, disableProduct } from "../../../../../Redux/ActionsGet";
import { useDispatch, useSelector } from "react-redux";
import style from './AllProducts.module.css'
import { Link } from "react-router-dom";
import hero3 from '../../../../../Assets/img/hero3.jpg';


import { createUser } from "../../../../../Redux/actionUser";
import { useAuth0 } from '@auth0/auth0-react';
import NotAdmin from "../../../Components/NotAdmin/NotAdmin";

const AllProducts = () => {
    const dispatch = useDispatch();
    const theUser = useSelector(state => state.user.theUser)
    const { isAuthenticated,user } = useAuth0();

    useEffect(() => {
        dispatch(getAllProducts());
        if (isAuthenticated && !theUser.id) dispatch(createUser(user))
    },[])
    const products = useSelector(state => state.products.filteredProducts);

    const handlerExisting = (e, id) => {
        dispatch(disableProduct(id))
        .then(() => dispatch(getAllProducts()))
        
    }


    if (!theUser.id) {
		return (
			<div className={style.content}>
				<div className={style.loader}>
					<div className={style.circle}></div>
					<div className={style.circle}></div>
					<div className={style.circle}></div>
					<div className={style.circle}></div>
				</div>
			</div>
		);
	}
    if (theUser.id && !theUser.admin) return (
        <NotAdmin />
    )
    else return (<section>
        <img src={hero3} alt='found' className={style.found} />
        <div className={style.return}>
            <Link to={'/admin/dashboard'} className={style.Link} >
            <h6>{'<<'}</h6>
            </Link>
        </div>
        <table className={style['users-table']}>
            <thead>
                <tr>
                    <th>Image</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Disable</th>
                    <th>View More</th>
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
                        <Link to={`/admin/product/detail/${product.id}`}>View More</Link>
                    </td>
                </tr>
                })}

            </tbody>
        </table>
    </section>
    )
}
export default AllProducts;