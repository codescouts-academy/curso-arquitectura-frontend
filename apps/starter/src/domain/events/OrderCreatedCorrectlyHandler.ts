import { Handler } from "@codescouts/events";

import { OrderCreatedCorrectly } from "./OrderCreatedCorrectly";

export class OrderCreatedCorrectlyHandler extends Handler<OrderCreatedCorrectly> {
  public constructor() {
    super(OrderCreatedCorrectly);
  }

  protected handle(event: OrderCreatedCorrectly): void | Promise<unknown> {
    const message = `Nueva orden creada correctamente por un total de ${event.order.total}€.- a las ${event.when}`;

    alert(message);
  }
}
