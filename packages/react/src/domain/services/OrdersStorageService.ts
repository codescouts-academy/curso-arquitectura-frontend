import { Order } from "../model/order";

export interface OrdersStorageService {
  orders: Order[];
  addOrder(order: Order): void;
  update(order: Order): void;
}
