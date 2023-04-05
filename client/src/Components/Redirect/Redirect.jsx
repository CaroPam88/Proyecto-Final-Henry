import style from './Redirect.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom"
import { getAllTheUsers } from '../../Redux/actionUser';

const Redirect = () => {
    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTheUsers())
    })
    let theUser = useSelector(state => state.user.theUser)
    if (theUser.id) {
        if(!theUser.admin){
            return(
            <div className = {style.div}>
                <div className ={style.div}>
                    <h1  className ={style.h1}> You don't have access </h1>
                <Link to="/home" className={style.link}>
                    <button className={style.button}>Redirect Home</button>
                </Link>
                </div>
            </div>
            )
            
        }
    }

};
export default Redirect;
