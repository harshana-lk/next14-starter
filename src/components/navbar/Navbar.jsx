import Links from "./links/Links";
import styles from "./navbar.module.css";
import Logo from "@/lib/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={Logo} alt="logo" width={140} height="auto" />
        </Link>
      </div>
      <div>
        <Links />
      </div>
    </div>
  );
};
export default Navbar;
