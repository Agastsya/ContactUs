import Button from "../Button/Button";
import styles from "./contactForm.module.css";
const ContactForm = () => {
  return (
    <section className={`container ${styles.contactform}`}>
      <Button />
      <div className={styles.Contact_Form}></div>
      <div className={styles.Contact_Image}></div>
    </section>
  );
};

export default ContactForm;
