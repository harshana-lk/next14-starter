import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About",
  description: "We create digital ideas that are bigger,bolder,braver and better.",
};

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>About Us</h2>
        <h1 className={styles.title}>
          We create digital ideas that are bigger,bolder,braver and better.
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
          voluptatem facilis tenetur soluta quis assumenda dicta odit ratione
          corrupti fuga expedita iure sed a,
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Year of experience</p>
          </div>
          <div className={styles.box}>
            <h1>10 +</h1>
            <p>Year of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="alt" fill />
      </div>
    </div>
  );
};
export default AboutPage;
