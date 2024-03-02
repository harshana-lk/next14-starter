import Image from "next/image";
import styles from "./loading.module.css";
const loading = () => {
  return (
    <div className={styles.container}>
      <Image src="/loading.gif" alt="alt" width={200} height={200} />
    </div>
  );
};
export default loading;
