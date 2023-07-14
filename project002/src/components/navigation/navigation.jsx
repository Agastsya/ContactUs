import styles from "./navigation.module.css";
const Navigation = () => {
  console.log(styles);
  return (
    <nav className={`${styles.navigation} container`}>
      <div>
        <img src="/images/logo.png" alt="" />
      </div>
      <ul className="nav-options">
        <li href="#">HOME</li>
        <li href="#">LOCATION</li>
        <li href="#">CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
