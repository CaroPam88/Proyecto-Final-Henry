import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTheUsers } from "../../../../../Redux/actionUser";
import { PieChart, Pie, Cell, Legend, ResponsiveContainer, Tooltip } from "recharts"

const PieAllProductsSales = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTheUsers());
    }, [dispatch]);

    const allUsers = useSelector(state => state.user.allUsers);
    console.log(allUsers);

  // Función para obtener los datos de los productos vendidos
    const getAllProductsSales = () => {
    if (!allUsers || allUsers.length === 0) {
        return [];
    }

    const productsSale = {};
    allUsers.forEach((user) => {
            user.history.forEach((sale) => {
            if (productsSale[sale.name]) {
                productsSale[sale.name] += sale.cantidad;
            } else {
                productsSale[sale.name] = sale.cantidad;
            }
        });
    });

    return Object.keys(productsSale).map((nameProduct) => ({
        name: nameProduct,
        value: productsSale[nameProduct],
    }));
};

  // Configuración para los colores de las partes del gráfico
    const colors = [ '#7754f7', '#54f7b8', '#eef85d', '#f79d54', '#f754dc','#006f8b', '#f75454', '#87f766', '#66c9f7', '#f7ac66'];

  // Renderizar el gráfico de torta
    console.log("getAllProductsSales():", getAllProductsSales());
    return (
        <div  style={{ width: '100%', height: '100%'}} >
            <ResponsiveContainer>
                <PieChart>
                {/* el legend es para los nombres abajo */}
                <Pie data={getAllProductsSales()} dataKey="value" nameKey="name">
                    {getAllProductsSales().map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                    ))}
                </Pie>
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}
export default PieAllProductsSales;