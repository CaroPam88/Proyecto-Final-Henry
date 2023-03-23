import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Components/LogoutButton";

const UserProfile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log(user)

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <div>
          <img
            src={user.picture}
            alt={user.name}
          />
          <h1>{user.name}</h1>
          <p>{user.nickname}</p>
          <p>{user.email}</p>
        </div>
        <div>
        </div>
        <div>
          <LogoutButton />
        </div>
      </div>
    )
  );
};

export default UserProfile;