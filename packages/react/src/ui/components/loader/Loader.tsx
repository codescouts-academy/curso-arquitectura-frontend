import { Show } from "../show";
import styles from "./Loader.module.css";

export const Loader = ({ loading }: { loading: boolean }) => {
  return (
    <Show when={loading}>
      <div className={styles.spinner}></div>
    </Show>
  );
};
