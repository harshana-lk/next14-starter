import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>blogger.</div>
      <div className={styles.text}>
        Designed by HarshuOnlive ©️ All rights reserved
      </div>
    </div>
  );
};
export default Footer;
