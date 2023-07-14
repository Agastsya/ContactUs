import { MdMessage } from "react-icons/md";
import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import Button from "../Button/Button";
import styles from "./contactForm.module.css";
const ContactForm = () => {
  const onViaCall = () => {
    console.log("i am from call");
  };
  return (
    <div className={styles.contactContent}>
      <section className="container">
        <div className={styles.top_btn}>
          <Button
            onClick={onViaCall}
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

        <form>
          <div className={styles.form_control}>
            <label>Name</label>
            <input type="text" />
          </div>
          <div className={styles.form_control}>
            <label>Email</label>
            <input type="text" />
          </div>
          <div className={styles.form_control}>
            <label>Text</label>
            <textarea type="text" />
          </div>
        </form>
        <button className="primary_btn_submit">Submit</button>
        <div className="image">
          <img src="/images/contact.svg" alt="" />
        </div>
      </section>
    </div>
  );
};

export default ContactForm;
