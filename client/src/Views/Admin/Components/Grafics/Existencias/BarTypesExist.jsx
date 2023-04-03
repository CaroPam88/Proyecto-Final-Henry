import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis} from 'recharts';
import React from 'react';
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllProducts } from '../../../../../Redux/ActionsGet';




export const BarTypesExist = () => {
    
    let dispatch = useDispatch();

    useEffect (()=>{
    dispatch(getAllProducts());
    }, [dispatch]);

    const clothes = useSelector((state) => state.products.products)
   
    let pantalones = clothes.filter(el => el.type.includes("pantalon"))
    let camisas = clothes.filter(el => el.type.includes("camisa"))
    let remeras = clothes.filter(el => el.type.includes("remera"))
    let vestidos = clothes.filter(el => el.type.includes("vestido"))
    let shorts = clothes.filter(el => el.type.includes("short"))
  
    let StockPantalon = pantalones.map(el => el.stockGeneral)
    let StockPantalones = StockPantalon.reduce((sum, value) => sum + value, 0);

    let StockCamisa = camisas.map(el => el.stockGeneral)
    let StockCamisas = StockCamisa.reduce((sum, value) => sum + value, 0);

    let StockRemera = (remeras.map(el => el.stockGeneral))
    let StockRemeras = StockRemera.reduce((sum, value) => sum + value, 0);

    let StockVestid = vestidos.map(el => el.stockGeneral)
    let StockVestidos = StockVestid.reduce((sum, value) => sum + value, 0);

    let StockShort= shorts.map(el => el.stockGeneral)
    let StockShorts = StockShort.reduce((sum, value) => sum + value, 0);

const data = [
    {Prenda: "Pantalones", StockGeneral: StockPantalones},
    {Prenda: "Camisas", StockGeneral: StockCamisas },
    {Prenda: "Remeras", StockGeneral: StockRemeras},
    {Prenda: "Vestidos", StockGeneral: StockVestidos},
    {Prenda: "Shorts", StockGeneral: StockShorts},
]

return (
    <ResponsiveContainer width="100%" aspect={2}>
        <BarChart data={data}
           width={500}
           height={300}
           margin={{
            top:5,
            right:30,
            left:20,
            bottom:5
           }}
        >
        <CartesianGrid strokeDasharray='4 1 2'/>
        <XAxis dataKey="Prenda"/>
        <YAxis />
        <Tooltip/>
        <Legend />
        <Bar dataKey="StockGeneral" fill="#006f8b" />
        </BarChart>
    </ResponsiveContainer>
  );
}