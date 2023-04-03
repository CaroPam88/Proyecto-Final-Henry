import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTheUsers } from "../../../../../Redux/actionUser";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const BarClothesTypeSales = () => {
  const dispatch = useDispatch();
  const allUsers = useSelector(state => state.user.allUsers);

  useEffect(() => {
    dispatch(getAllTheUsers());
  }, [dispatch]);

  // Función para obtener los datos de las ventas por tipo de ropa
  const getClothesTypeSales = () => {
    if (!allUsers || allUsers.length === 0) {
      return [];
    }
  
    const clothes = allUsers.flatMap(user => user.history.map(sale => sale.type));
    const pantalones = clothes.filter(el => el.type.includes("pantalon")).reduce((acc, curr) => acc + curr.cantidad, 0);
    const camisas = clothes.filter(el => el.type.includes("camisa")).reduce((acc, curr) => acc + curr.cantidad, 0);
    const remeras = clothes.filter(el => el.type.includes("remera")).reduce((acc, curr) => acc + curr.cantidad, 0);
    const vestidos = clothes.filter(el => el.type.includes("vestido")).reduce((acc, curr) => acc + curr.cantidad, 0);
    const shorts = clothes.filter(el => el.type.includes("short")).reduce((acc, curr) => acc + curr.cantidad, 0);
  
    return [
      { name: "Pantalones", ventas: pantalones },
      { name: "Camisas", ventas: camisas },
      { name: "Remeras", ventas: remeras },
      { name: "Vestidos", ventas: vestidos },
      { name: "Shorts", ventas: shorts },
    ];
  };

  // Renderizar el gráfico de barras
  return (
    <div>
      <h2>Ventas por Tipo de Ropa:</h2>
      <BarChart width={600} height={300} data={getClothesTypeSales()}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="ventas" fill="#8884d8" />
      </BarChart>
    </div>
  );
}

export default BarClothesTypeSales;

