import { useEventDispatcher } from "@codescouts/ui";

import { useNotifier } from "../services/NotificationService";
import { usePayment } from "../services/PaymentService";
import { useOrdersStorage } from "../services/OrdersStorageService";
import { useCartStorage } from "../services/CartStorageService";
import { OrderProductsUserCase } from "../../application/order-products";

export const useOrderProducts = () => {
    const notifier = useNotifier();
    const payment = usePayment();
    const orderStorage = useOrdersStorage();
    const cartStorage = useCartStorage();
    const dispatcher = useEventDispatcher();

    return new OrderProductsUserCase(
        orderStorage,
        cartStorage,
        payment,
        notifier,
        dispatcher
    );
};
