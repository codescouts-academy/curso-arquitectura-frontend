import { useHomeViewModel } from "./useHomeViewModel";
import { Loader, Show } from "../../components";
import styles from "./Home.module.css";

export const Home = () => {
  const { loading, counter, increment, decrement } = useHomeViewModel();

  return (
    <div className={styles.box}>
      <div className={styles.center}>
        <Loader loading={loading} />
        <Show when={!loading}>
          <>
            <button onClick={decrement} disabled={!counter.canDecrementValue()}>
              Decrementar
            </button>
            {counter.value}
            <button onClick={increment}>Incrementar</button>
          </>
        </Show>
      </div>
    </div>
  );
};
