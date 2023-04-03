import { PieChart, ResponsiveContainer, Tooltip, Pie, Cell, Legend} from 'recharts';
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

    let nameAndStock = clothes.reduce((acumulador, articulo) => {
        const stockColors = articulo.sizes.flatMap(size => size.colors);
        const suma = stockColors.reduce((sumaParcial, color) => {
            return sumaParcial + color.stockColors;
        }, 0);
        if (acumulador[articulo.name]) {
            acumulador[articulo.name] += suma;
        } else {
            acumulador[articulo.name] = suma;
        }
        return acumulador;
    }, {});

    const data = Object.entries(nameAndStock).map(([name, value]) => {
        return { name, value };
      });
    console.log("data", data);
    const colors = [ '#7754f7', '#54f7b8', '#eef85d', '#f79d54', '#f754dc','#006f8b', '#f75454', '#87f766', '#66c9f7', '#f7ac66'];
    return (
        <div style={{width: '100%', height: '100%'}}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie dataKey="value" data={data} innerRadius={60} outerRadius={85} fill='#006f8b' >
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
