import { BarTypesExist } from '../../Components/Grafics/Existencias/BarTypesExist';
import { PieAllProductsExist } from '../../Components/Grafics/Existencias/PieAllProductsExist';
import BarPotentialSales from '../../Components/Grafics/Sales/BarPotentialSales';
// import BarClothesTypeSales from '../../Components/Grafics/Sales/BarPotentialSalesType';
import PieAllProductsSales from '../../Components/Grafics/Sales/PieAllProductsSales';
import SideBar from '../../Components/SideBar/SideBar';
import Calculations from '../../Helpers/Calculations';
import style from './DashBoard.module.css';
import hero3 from '../../../../Assets/img/hero3.jpg'

const DashBoard = () => {
    return (
        <div className={style.cont}>
            <img src={hero3} alt='found' className={style.found} />
            <div >
                <SideBar />
            </div>
            <div className={style.grafics}>
                {/* <div>
                    <BarClothesTypeSales />
                </div> */}
                <div className={style.sales}>
                    <div className={style.graficBar} >
                        <p>Potential sales:</p>
                        <BarPotentialSales />
                    </div>
                    <div className={style.graficPie} >
                        <p>All products sales:</p>
                        <PieAllProductsSales />
                    </div>
                </div>
                <div className={style.exist}>
                    <div className={style.graficBar} >
                        <p>Type clothes exist:</p>
                        <BarTypesExist />
                    </div>
                    <div className={style.graficPie} >
                        <p>All products:</p>
                        <PieAllProductsExist />
                    </div>
                </div>
            </div>
            <div className={style.links}>
                <Calculations />
            </div>
        </div>
    );
}
export default DashBoard;