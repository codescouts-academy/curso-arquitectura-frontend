import { Cart } from "../domain/model/cart";
import { User } from "../domain/model/user";
import { Order } from "../domain/model/order";

import { OrdersStorageService } from "../domain/services/OrdersStorageService";
import { CartStorageService } from "../domain/services/CartStorageService";
import { PaymentService } from "../domain/services/PaymentService";
import { NotificationService } from "../domain/services/NotificationService";


export class OrderProductsUserCase {
  constructor(
    private orderStorage: OrdersStorageService,
    private cartStorage: CartStorageService,
    private payment: PaymentService,
    private notifier: NotificationService
  ) { }

  public async execute(user: User, cart: Cart) {
    const order = new Order(user, cart);

    const paid = await order.tryPay(this.payment);
    if (!paid) return this.notifier.notify("El pago no fué realizado 🤷");

    this.orderStorage.addOrder(order);
    this.cartStorage.emptyCart();

    setTimeout(() => {
      this.deliverOrder(order);

      setTimeout(() => {
        this.completeOrder(order);
      }, 5000);
    }, 5000);
  }

  private deliverOrder(order: Order) {
    order.deliver();

    this.orderStorage.update(order);
  }

  private completeOrder(order: Order) {
    order.finish();

    this.orderStorage.update(order);
  }
}


