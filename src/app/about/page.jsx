import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="alt" fill />
      </div>
      {/* <img src="/about.png" /> */}
    </div>
  );
};
export default AboutPage;
