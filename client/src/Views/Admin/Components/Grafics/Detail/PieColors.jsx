import { useSelector } from "react-redux";
import { PieChart, ResponsiveContainer, Pie, Tooltip, Cell, Legend } from "recharts";


const PieColors = () => {

    const detail = useSelector(state => state.products.productDetail);

    const dataColors = detail.sizes?.flatMap(col => col.colors?.flatMap(col => col))

    const data = dataColors?.map(col =>
        { return {
            name: col.color,
            value: col.stockColors,
        }})
    const colorsPie = [ '#7754f7', '#54f7b8', '#eef85d', '#f79d54', '#f754dc','#006f8b', '#f75454', '#87f766', '#66c9f7', '#f7ac66'];

    return (
        <div style={{ width: '100%', height: '100%' }}>
            <ResponsiveContainer>
                <PieChart>
                    <Pie  data={data}  dataKey='value' innerRadius={50} outerRadius={80}>
                    {data?.map((el,i) => (<Cell key={`cell - ${i}`} fill={colorsPie[i % colorsPie.length]} />))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}
export default PieColors;