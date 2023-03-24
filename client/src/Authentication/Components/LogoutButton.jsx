import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import style from "../Components/LogoutButton.module.css"

const LogoutButton = () => {
  const { logout } = useAuth0();
  return (
    <div>
      <button
        class={style.button}
        type="button"
        onClick={() => {
          window.localStorage.removeItem("userStorage");
          logout({ returnTo: '/' });
        }}
      >
        Cerrar Sesion
      </button>
    </div>
  );
};

export default LogoutButton;