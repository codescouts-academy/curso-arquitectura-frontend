import { NotificationService } from "../../domain/services/NotificationService";
import { CartStorageService } from "../../domain/services/CartStorageService";
import { useNotifier } from "../services/NotificationService";
import { useCartStorage } from "../services/CartStorageService";
import { AddToCartUseCase } from "../../application/add-to-cart";


export const useAddToCart = () => {
    const storage: CartStorageService = useCartStorage();
    const notifier: NotificationService = useNotifier();

    return new AddToCartUseCase(storage, notifier);
};
