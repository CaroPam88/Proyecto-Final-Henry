import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTheUsers } from "../../../../../Redux/actionUser";
import { PieChart, Pie, Cell, Legend } from "recharts"

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
  const colors = ['#0088FE', '#006f8b', '#9eb6e9', '#140858', '#4215e3'];

  // Renderizar el gráfico de torta
  console.log("getAllProductsSales():", getAllProductsSales());
  return (
    <div>
      <h2>Products Sales:</h2>
      <PieChart width={400} height={400}>
        <Legend />
        {/* el legend es para los nombres abajo */}
        <Pie data={getAllProductsSales()} dataKey="value" nameKey="name">
            
          {getAllProductsSales().map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}

export default PieAllProductsSales;