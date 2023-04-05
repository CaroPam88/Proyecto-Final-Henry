import { BarTypesExist } from '../../Components/Grafics/Existencias/BarTypesExist';
import { PieAllProductsExist } from '../../Components/Grafics/Existencias/PieAllProductsExist';
import BarPotentialSales from '../../Components/Grafics/Sales/BarPotentialSales';
import PieAllProductsSales from '../../Components/Grafics/Sales/PieAllProductsSales';
import SideBar from '../../Components/SideBar/SideBar';
import Calculations from '../../Helpers/Calculations';
import style from './DashBoard.module.css';
import hero3 from '../../../../Assets/img/hero3.jpg'

import { createUser } from '../../../../Redux/actionUser';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import NotAdmin from '../../Components/NotAdmin/NotAdmin';



const DashBoard = () => {
    const dispatch = useDispatch();

    const theUser = useSelector(state => state.user.theUser)
    const { isAuthenticated,user } = useAuth0();

    useEffect(() => {
        if (isAuthenticated) dispatch(createUser(user))
    },[]);

    if ( theUser.id && !theUser.admin || isAuthenticated ) return (
        <NotAdmin />
    )
    else return (
        <div className={style.cont}>
            <img src={hero3} alt='found' className={style.found} />
            <div >
                <SideBar />
            </div>
            
            <div className={style.grafics}>
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
            <div className={style.links}>
                <Calculations />
            </div>
            </div>
        </div>
    );
}
export default DashBoard;