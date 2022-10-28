import { Navigate } from "react-router";
import { useUserStorage } from "../../../infrastructure/services/UserStorageService";
import { Buy } from "../../Buy";
import { Cart } from "../../Cart";
import { Orders } from "../../Orders";
import { Profile } from "../../Profile";
import { Logout } from "../Auth/Logout";

export const User = () => {
  const { user } = useUserStorage();
  if (!user) return <Navigate to="/auth" />;

  return (
    <main>
      <Logout />
      <Profile />
      <Orders />
      <Cart />
      <Buy />
    </main>
  );
};
