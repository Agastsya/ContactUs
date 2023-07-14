import styles from "./buttontop.modules.css";
const Button = ({ isOutline, text, icon, classButton }) => {
  return (
    <div>
      <button className={classButton}>
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
