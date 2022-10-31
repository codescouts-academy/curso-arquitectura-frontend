import { LogoutUseCase } from "../../application/logout";
import { useCartStorage } from "../services/CartStorageService";
import { useUserStorage } from "../services/UserStorageService";

export const useLogoutUseCase = () => {
    const user = useUserStorage();
    const cart = useCartStorage();

    return new LogoutUseCase(user, cart);
};