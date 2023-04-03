import React from "react";
import {useAuth0} from '@auth0/auth0-react';
import style from "../Components/LoginButton.module.css"

const LoginButton = () =>{
    const { loginWithRedirect } = useAuth0();
    
    return(
        <div>
            <button
            className={style.button}
            onClick={ () =>  loginWithRedirect()}
            >
                Login
            </button>
        </div>
    )
}

export default LoginButton;
