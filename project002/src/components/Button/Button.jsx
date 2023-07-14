import { MdMessage } from "react-icons/md";
import styles from "./Button.modules.css";
const Button = () => {
  return (
    <div className={styles.button}>
      <MdMessage />
      Button
    </div>
  );
};

export default Button;
