import { PieChart, ResponsiveContainer, Tooltip, Pie, Cell} from 'recharts';
import React from 'react';
import { useEffect } from "react";
import {useDispatch, useSelector} from 'react-redux';
import { getAllProducts } from '../../../../../Redux/ActionsGet';

export const PieAllProductsExist = () => {

    let dispatch = useDispatch();

    useEffect (()=>{
    dispatch(getAllProducts());
    }, [dispatch]);

    const clothes = useSelector((state) => state.products.products)

    let nameAndStock = clothes.map(el => {return {name: el.name, stock:el.stockGeneral}}) 
    console.log(nameAndStock);
    let data = [];
    for(let i = 0; i < nameAndStock.length; i++){
        data.push(nameAndStock[i])
    }
    console.log("data", data);
    const colors = ['#ce93d8','#5c6bc0','#b39ddb','#4dd0e1','#d500f9']
    return (
      <div style={{width: '100%', height: 500}}>
          <ResponsiveContainer>
            <PieChart>
                <Pie
                
               dataKey="stock"
               data={data}
               innerRadius={60}
               outerRadius={85}
               fill='#006f8b'
               >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={colors[index % colors.length]}/>
                ))
            }
                </Pie>
            <Tooltip/>
            </PieChart>
        </ResponsiveContainer>
      </div>
      );
}
