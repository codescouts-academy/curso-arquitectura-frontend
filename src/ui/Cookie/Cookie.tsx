import styles from "./Cookie.module.css";
import { Toppings } from "./Toppings";
import { Product } from "../../domain/model/product";
import { useCookiesViewModel } from "./useCookiesViewModel";

export const Cookie = ({ cookie }: { cookie: Product }) => {
  const { cart, user, addToCart } = useCookiesViewModel();

  return (
    <article className={styles.cookie}>
      <span className={styles.image}>🍪</span>
      <span className={styles.title}>{cookie.title}</span>
      <Toppings user={user} cookie={cookie} />

      {!!user && (
        <button type="button" onClick={() => addToCart.execute(user, cookie)}>
          {cookie.price} €
        </button>
      )}

      {cart.contains(cookie) && (
        <span className={styles.contains}>In your cart</span>
      )}
    </article>
  );
};
