import { useLogoutViewModel } from "./useLogoutViewModel";

export const Logout = () => {
  const { logout } = useLogoutViewModel();

  return <button onClick={logout}>Logout</button>;
};
