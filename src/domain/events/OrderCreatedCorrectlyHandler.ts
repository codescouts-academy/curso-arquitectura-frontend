import { Handler } from "@codescouts/events";

import { OrderCreatedCorrectly } from "./OrderCreatedCorrectly";

export class OrderCreatedCorrectlyHandler extends Handler<OrderCreatedCorrectly> {
  public constructor() {
    super(OrderCreatedCorrectly);
  }

  protected handle(event: OrderCreatedCorrectly): void | Promise<any> {
    const message = `Nueva orden creada correctamente por un total de ${event.order.total}€.- a las ${event.when}`;

    alert(message);
  }
}
