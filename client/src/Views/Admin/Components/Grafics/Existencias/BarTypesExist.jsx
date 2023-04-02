import React from 'react';
import { Bar } from 'react-chartjs-2';
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllProducts } from '../../../../../Redux/ActionsGet';
// import { CategoryScale, Chart } from "chart.js";
// Chart.register(CategoryScale);


export const BarTypesExist = () => {
    
    let dispatch = useDispatch();

    useEffect (()=>{
    dispatch(getAllProducts());
    }, [dispatch]);

    const clothes = useSelector((state) => state.products.products)
   
    console.log("clothes", clothes);
   
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

const data = {
    labels:['Pantalones', 'Camisas', 'Remeras', 'Vestidos', 'Shorts'],
    datasets: [{
        label:"Types Products",
        backgroundColor: 'rgba(0, 255, 0, 2',
        borderColor: "black",
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(0, 255, 0, 0, 2)',
        hoverBorderColor: '#FFFF000',
        data: [StockPantalones, StockCamisas, StockRemeras, StockVestidos, StockShorts]
    }]
};
console.log("data", data);
const opciones = {
    maintainAspectRatio: false,
    respoinsive: true,
}

return (
    <div>
        <h2> Products Types </h2>
        <Bar data={data} opciones={opciones} />
    </div>
  );
}