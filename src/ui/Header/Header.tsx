import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useHeaderViewModel } from "./useHeaderViewModel";

export const Header = () => {
  const { isLoggedIn, userName, quantity } = useHeaderViewModel();

  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        CodeScouts 🍪
      </Link>

      {!isLoggedIn ? (
        <Link to="/auth">Log in</Link>
      ) : (
        <Link to="/user">
          {userName} ({quantity})
        </Link>
      )}
    </header>
  );
};
