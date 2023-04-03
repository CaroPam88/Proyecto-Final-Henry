import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllTheUsers } from "../../../Redux/actionUser";
import { getAllProducts } from "../../../Redux/ActionsGet";

const Calculations = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
        dispatch(getAllTheUsers());
    }, [dispatch]);

    const clothes = useSelector((state) => state.products.products)
    const allUsers = useSelector(state => state.user.allUsers);

    const Stock = clothes.reduce((acumulador, articulo) => {
        const stockColors = articulo.sizes.flatMap(size => size.colors);
        const suma = stockColors.reduce((sumaParcial, color) => {
            return sumaParcial + color.stockColors;
        }, 0);
        return acumulador + suma;
        }, 0);
        console.log('Stock',Stock);

    const salesHistory = allUsers.flatMap((user) => user.history?.flatMap(history => history.cantidad));
    const Sales = salesHistory.reduce((total, current) => {
        return total + current;
    }, 0);
    console.log('sales',Sales);

    return (
        <div>
            <Link to='/admin/allProducts'>Total stook: {Stock}</Link>
            <Link to='/admin/allUsers'>Total sales: {Sales}</Link>
        </div>
    )
}

export default Calculations;