import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllTheUsers } from "../../../../../Redux/actionUser";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const BarPotentialSales = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTheUsers());
    },[]);

    const users = useSelector((state) => state.user.allUsers);
    const allCart = users?.flatMap(user => user.cart?.flatMap(el => el));
    const objCart = Object.values(allCart.reduce((acumulador, producto) => {
        const {id, ...productoSinId} = producto;
        if (acumulador[id]) {
            acumulador[id].cantidad += producto.cantidad;
        } else {
            acumulador[id] = {...productoSinId, cantidad: producto.cantidad};
        }
        return acumulador;
    }, {}));

    const data = objCart?.map(producto =>{ 
        return { name : producto.name, cant : producto.cantidad }
    })

    return (
        <ResponsiveContainer width='100%' aspect={2} >
            <BarChart data={data} width={500} height={200} margin={{top:5,left:5,right:5,bottom:5}} >
                <CartesianGrid strokeDasharray='4 1 2' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='cant' fill="#006f8b"/>
            </BarChart>
        </ResponsiveContainer>
    )
};
export default BarPotentialSales;