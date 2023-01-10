import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.logo}
        src="./favicon.png"
        width="30px"
        alt="codescouts-logo"
      />
      <span
        style={{
          marginTop: "4px",
        }}
      >
        CodeScouts
      </span>
    </header>
  );
};
