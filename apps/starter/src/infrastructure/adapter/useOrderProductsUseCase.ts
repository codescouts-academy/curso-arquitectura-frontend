import { useEventDispatcher } from "@codescouts/ui";

import { OrderProductsUserCase } from "@/application/order-products";
import { useCartStorage } from "@/infrastructure/services/CartStorageService";
import { useNotifier } from "@/infrastructure/services/NotificationService";
import { useOrdersStorage } from "@/infrastructure/services/OrdersStorageService";
import { usePayment } from "@/infrastructure/services/PaymentService";

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
