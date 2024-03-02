"use client  ";
import styles from "./contact.module.css";
import Image from "next/image";
import ContactImg from "../../../public/contact.png";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/hydrationTest";

// const HydrationTestNoSSR = dynamic(()=> import ("@/components/hydrationTest") , {ssr:false})

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src={ContactImg} alt="alt" width={500} height="auto" />
      </div>
      <div className={styles.formContainer}>
        {/* <HydrationTestNoSSR/> */}
        <form action=" " className={styles.form}>
          <input
            type="text"
            placeholder="Name"
            className={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Phone Number"
            className={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            required
          />
          <textarea
            placeholder="Message"
            className={styles.textarea}
            cols="30"
            rows="10"
            required
          ></textarea>
          <button className={styles.button}>Send</button>
        </form>
      </div>
    </div>
  );
};
export default ContactPage;
