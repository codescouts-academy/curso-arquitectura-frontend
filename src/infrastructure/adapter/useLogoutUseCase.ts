import { LogoutUseCase } from "@application/logout";

import { useCartStorage } from "@infrastructure/services/CartStorageService";
import { useUserStorage } from "@infrastructure/services/UserStorageService";

export const useLogoutUseCase = () => {
    const user = useUserStorage();
    const cart = useCartStorage();

    return new LogoutUseCase(user, cart);
};