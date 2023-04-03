import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail, clearProductDetailState, disableProduct } from "../../../../../Redux/ActionsGet";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import style from './DetailProduct.module.css';
import hero3 from '../../../../../Assets/img/hero3.jpg';
import PieColors from "../../../Components/Grafics/Detail/PieColors";

const DetailProduct = () => {
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProductDetail(id));
        return () => {
            dispatch(clearProductDetailState());
        };
    }, []);
    const detail = useSelector((state) => state.products.productDetail);

    const handlerExisting = (e, id) => {
        dispatch(disableProduct(id))
        .then(() => dispatch(getProductDetail(id)))
        
    }
    return (
        <section>
            <img src={hero3} alt='found' className={style.found} />
            <section className={style.content}>
                <section className={style.sectionOne}>
                    <section className={style.imgContent}>
                        <img src={detail.image} alt={detail.name} className={style.image} />
                    </section>
                    <div className={style.oneInfo}>
                        <h3>Nombre: {detail.name}</h3>
                        <p>Tipo: {detail.type}</p>
                        <p>Precio: ${detail.price}</p>
                    </div>
                    <div className={style.grap}>
                        <PieColors />
                    </div>
                </section>
                <section className={style.sectionTwo}>
                <Link to='/admin/allProducts' className={style.return} >
                    <h6>{'<<'}</h6>
                </Link>
                    <h3>Nombre: {detail.name}</h3>
                    <section className={style.twoInfo}>
                        <p>Id: {detail.id}</p>
                        <div className={style.genders}>
                            <p>Genero: </p>
                            {detail.sex?.map((el, i) => <p key={i} >{el}</p>)}
                        </div>
                        <p>Stock: {detail.stockGeneral}</p>
                        {detail.sizes?.map((el, i) => {
                            return (<div key={i}>
                                <p>Talle: {el.size} | Stock por talle: {el.stockSize}</p>
                                <div className={style.tableCont} >
                                    <table className={style['colors-table']}>
                                        <thead>
                                            <tr>
                                                <th>color</th>
                                                <th>Stock del color</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {el.colors?.map((col, i) => {
                                                return <tr key={i}>
                                                    <td>{col.color}</td>
                                                    <td>{col.stockColors}</td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>)
                        })}
                    </section>
                    <section className={style.buttonCont} >
                        <div>Deshabilitado: </div>
                        <label className={style.switch}>
                            <input type="checkbox" className={style.checkbox} checked={!detail.existing} onChange={(e) => {handlerExisting(e, detail.id)}}/>
                            <div className={style.slider}></div>
                        </label>
                        <Link to={`/admin/product/ModifyProduct/${id}`}>
                            <button className={style.button}>modificar</button>
                        </Link>
                    </section>
                </section>
            </section>
        </section>
    )
};
export default DetailProduct;