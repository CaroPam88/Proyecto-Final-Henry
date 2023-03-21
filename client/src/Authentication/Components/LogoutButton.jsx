import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = () => {
  const { logout, user} = useAuth0();
  console.log(user);
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          window.localStorage.removeItem("userStorage");
          logout({ returnTo: window.location.origin });
        }}
      >
        Cerrar Sesion
      </button>
    </div>
  );
};

export default LogoutButton;