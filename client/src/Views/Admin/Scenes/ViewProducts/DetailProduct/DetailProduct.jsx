import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductDetail, clearProductDetailState } from "../../../../../Redux/ActionsGet";
import { useDispatch } from "react-redux";

const DetailProduct = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductDetail(id));
        return () => dispatch(clearProductDetailState());
    },[]);
    return (
        <section>
            aca estoy {id}
        </section>
    )
};
export default DetailProduct;