import { useCartStorage } from "@/infrastructure/services/CartStorageService";
import { useUserStorage } from "@/infrastructure/services/UserStorageService";

export const useCookiesViewModel = () => {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();

  return {
    cart,
    user,
  };
};
