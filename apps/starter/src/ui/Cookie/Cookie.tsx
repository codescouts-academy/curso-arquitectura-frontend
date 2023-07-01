import { Product } from "@/domain/model/product";

import cookieImage from "./assets/cookie.png";
import styles from "./Cookie.module.css";
import { Toppings } from "./Toppings";
import { useCookiesViewModel } from "./useCookiesViewModel";

export const Cookie = ({ cookie }: { cookie: Product }) => {
  const { cart, user } = useCookiesViewModel(); //TODO ADD TO CART;

  return (
    <article className={styles.cookie}>
      <span className={styles.image}>
        <img src={cookieImage} width="35%" />
      </span>
      <span className={styles.title}>{cookie.title}</span>
      <Toppings user={user} cookie={cookie} />

      {!!user && (
        <button
          type="button"
          onClick={() => {
            console.log("TODO: ADD TO CART");
          }}
        >
          {cookie.price} €
        </button>
      )}

      {cart.contains(cookie) && (
        <span className={styles.contains}>In your cart</span>
      )}
    </article>
  );
};
