import { MdMessage } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import Button from "../Button/Button";
import styles from "./contactForm.module.css";
const ContactForm = () => {
  return (
    <section className={`container ${styles.contactform}`}>
      <div className={styles.top_btn}>
        <Button
          classButton="primary_btn"
          text="VIA SUPPORT CALL"
          icon={<MdMessage fontSize="24px" />}
        />
        <Button
          classButton="primary_btn"
          text="VIA CONTACT"
          icon={<BsTelephoneFill fontSize="24px" />}
        />
      </div>
      <Button
        classButton="outline_btn"
        isOutline={true}
        text="VIA EMAIL FORM"
        icon={<HiMail fontSize="24px" />}
      />
      <div className={styles.Contact_Image}></div>
    </section>
  );
};

export default ContactForm;
