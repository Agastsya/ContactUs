import styles from "./buttontop.modules.css";
const Button = ({ isOutline, text, icon, classButton, ...rest }) => {
  return (
    <div>
      <button {...rest} className={classButton}>
        {icon}
        {text}
      </button>
    </div>
  );
};

export default Button;
