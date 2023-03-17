import { NotificationService } from "@domain/services/NotificationService";
import { CartStorageService } from "@domain/services/CartStorageService";
import { AddToCartUseCase } from "@application/add-to-cart";

import { useNotifier } from "@infrastructure/services/NotificationService";
import { useCartStorage } from "@infrastructure/services/CartStorageService";

export const useAddToCart = () => {
    const storage: CartStorageService = useCartStorage();
    const notifier: NotificationService = useNotifier();

    return new AddToCartUseCase(storage, notifier);
};
