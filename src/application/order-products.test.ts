import { CartStorageService } from "../domain/services/CartStorageService";
import { NotificationService } from "../domain/services/NotificationService";
import { OrdersStorageService } from "../domain/services/OrdersStorageService";
import { PaymentService } from "../domain/services/PaymentService";
import { OrderProductsUserCase } from "./order-products";

import { mock } from "jest-mock-extended";
import { User } from "../domain/model/user";
import { Cart } from "../domain/model/cart";
import { Order } from "../domain/model/order";

describe("order products", () => {
  const orderStorage = mock<OrdersStorageService>();
  const cartStorage = mock<CartStorageService>();
  const payment = mock<PaymentService>();
  const notifier = mock<NotificationService>();

  const user = new User(
    "sample-user-id",
    "fake",
    "fakeEmail",
    ["malvavisco", "cacahuete"],
    ["cacao", "cereza"],
    ["admin"]
  );
  const cart = new Cart([
    { title: "asd", price: 10, toppings: [], id: "fake" },
    { title: "asd", price: 10, toppings: [], id: "fake2" },
  ]);

  const orderProducts = new OrderProductsUserCase(
    orderStorage,
    cartStorage,
    payment,
    notifier
  );

  test("when the payment is failed notify users", async () => {
    payment.tryPay.mockResolvedValue(false);

    await orderProducts.execute(user, cart);

    expect(notifier.notify).toHaveBeenCalledWith(
      "El pago no fué realizado 🤷"
    );
  });

  test("when the payment is successfully add order correctly", async () => {
    payment.tryPay.mockResolvedValue(true);

    await orderProducts.execute(user, cart);

    expect(notifier.notify).toBeCalledTimes(0);
    expect(orderStorage.addOrder).toBeCalledTimes(1);
    expect(cartStorage.emptyCart).toBeCalledTimes(1);
  });

  test("after 5 seconds the order change to deliver status", async () => {
    const expectedOrder = new Order(user, cart);
    expectedOrder.deliver();
    payment.tryPay.mockResolvedValue(true);

    await orderProducts.execute(user, cart);

    const p = new Promise((res) => {
      setTimeout(() => {
        res(null);
        expect(orderStorage.update).toBeCalledWith(expectedOrder);
      }, 5000);
    });

    await p;
  }, 6000);
});
