import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from "../Components/AuthenticationButton";
import style from '../ProfileScreen/UserProfile.module.css'
import imgHome from '../../Assets/img/hero3.jpg';

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div class={style.container}>
        <img src={imgHome} alt="" className={style.imgB} />
        <div class={style.container2}>
          <img
            class={style.img}
            src={user.picture}
            alt={user.name}
          />
          <h1 class={style.name}>{user.name}</h1>
          <p class={style.p}>Nombre de Usuario: {user.nickname}</p>
          <p class={style.p}>E-mail: {user.email}</p>
        </div>
        <div class={style.margin}>
          <AuthenticationButton />
        </div>
      </div>
    )
  );
};

export default UserProfile;