import { useSelector } from "react-redux";
import AuthenticationButton from '../../../../Authentication/Components/AuthenticationButton'
import style from './SideBar.module.css';
import { Link } from "react-router-dom";

const SideBar = () => {

    const theAdmin = useSelector(state => state.user.theUser)

    console.log(theAdmin);
    return (
        <div className={style.content}>
            <AuthenticationButton />
            <section className={style.adminInfo}>
            <img src={theAdmin.picture} alt={theAdmin.name} className={style.img} />
            <h1 className={style.name}>{theAdmin.name}</h1>
            <p>{theAdmin.email}</p>
            </section>
            <section className={style.navigation}>
                <Link to={'/admin/dashboard'} className={style.button}>DashBoard</Link>
                <Link to={'/admin/allProducts'} className={style.button}>All Products</Link>
                <Link to={'/admin/allUsers'} className={style.button}>All Users</Link>
                <Link to={'/form'} className={style.button}>Create Product</Link>
            </section>
        </div>
    )
};

export default SideBar;