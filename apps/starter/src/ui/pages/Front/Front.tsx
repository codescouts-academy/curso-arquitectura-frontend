import { cookies } from "@/data/fakeData";
import { Product } from "@/domain/model/product";
import { Cookie } from "@/ui/Cookie";

import styles from "./Front.module.css";

export const Front = () => {
  return (
    <main>
      <h1>Cookies</h1>

      <ul className={styles.list}>
        {cookies.map((cookie: Product) => (
          <li key={cookie.id}>
            <Cookie cookie={cookie} />
          </li>
        ))}
      </ul>
    </main>
  );
};
