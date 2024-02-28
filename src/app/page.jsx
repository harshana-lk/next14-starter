import styles from "./home.module.css";
import Image from "next/image";
import Logo from "../../public/brands.png";
import HeroImg from "../../public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Creative Thoughts intoLIFE.</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
          nisi aperiam, alias reiciendis aliquam tenetur magnam labore qui,
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src={Logo} alt="alt" fill className={styles.brandImg} />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src={HeroImg} alt="alt" fill className={styles.heroImg} />
      </div>
    </div>
  );
}
