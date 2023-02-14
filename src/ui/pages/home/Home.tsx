import { useHomeViewModel } from "./useHomeViewModel";
import { Loader, Show } from "@ui/components";
import { Folders } from "./components";

import styles from "./Home.module.css";

export const Home = () => {
  const {
    loading,
    configuration,
    counter,
    increment,
    decrement,
    toggleDecrementValueManually,
  } = useHomeViewModel();

  return (
    <div className={styles.box}>
      <div className={styles.center}>
        <Loader loading={loading} />
        <Show when={!loading}>
          <>
            <p>Server: {configuration?.remote}</p>
            <button
              onClick={decrement}
              disabled={!counter?.canDecrementValue()}
            >
              Decrementar
            </button>
            {counter?.value}
            <button onClick={increment}>Incrementar</button>

            <Show when={!!configuration?.canDecrement}>
              <>
                <label>Can decrement</label>
                <input
                  id="canDecrement"
                  type="checkbox"
                  checked={counter?.canDecrementValue()}
                  onChange={toggleDecrementValueManually}
                />
              </>
            </Show>
          </>
        </Show>
      </div>
      <Folders />
    </div>
  );
};
