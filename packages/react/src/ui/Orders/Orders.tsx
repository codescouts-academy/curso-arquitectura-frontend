import { useOrdersViewModel } from "./useOrdersViewModel";

export const Orders = () => {
  const { orders } = useOrdersViewModel();

  if (!orders.length) return null;

  return (
    <section>
      <h2>Orders</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.created}>
            {order.created} | {order.total} ₽ | {order.status}
          </li>
        ))}
      </ul>
    </section>
  );
};
