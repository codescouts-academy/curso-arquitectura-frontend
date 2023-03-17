import { useAddToCart } from "@infrastructure/adapter/useAddToCartUseCase";
import { useCartStorage } from "@infrastructure/services/CartStorageService";
import { useUserStorage } from "@infrastructure/services/UserStorageService";

export const useCookiesViewModel = () => {
  const { user } = useUserStorage();
  const { cart } = useCartStorage();
  const addToCart = useAddToCart();

  return {
    cart,
    user,
    addToCart,
  };
};
