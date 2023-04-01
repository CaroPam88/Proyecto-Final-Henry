import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail, clearProductDetailState } from "../../../../../Redux/ActionsGet";
import { useDispatch, useSelector } from "react-redux";

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
    return (
        <section>
            <section>
                <img src={detail.image} alt={detail.name} />
            </section>
            <section>
                <h3>Nombre: {detail.name}</h3>
            </section>
            <section>
                <p>Tipo: {detail.type}</p>
                <p>Precio: ${detail.price}</p>
                <section>
                    Genero: {detail.sex?.map((el, i) => <p key={i} >{el}</p>)}
                </section>
                <p>Stock: {detail.stockGeneral}</p>
                <section>
                    {detail.sizes?.map((el, i) => {
                        return <div key={i}>
                            <p>Talle: {el.size}</p>
                            <p>Stock por talle: {el.stockSize}</p>
                            <section>
                                <p>Colores del talle: </p>
                                {el.colors?.map((col, i) => {
                                    return <div key={i}>
                                        <p>Color: {col.color}</p>
                                        <p>Stock del color: {col.stockColors}</p>
                                    </div>
                                })}
                            </section>
                        </div>
                    })}
                </section>
            </section>
        </section>
    )
};
export default DetailProduct;