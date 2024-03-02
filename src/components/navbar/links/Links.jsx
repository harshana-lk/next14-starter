"use client";

import styles from "./links.module.css";
import NavLink from "./navLink/NavLink";
import { useState } from "react";
import Image from "next/image";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
  {
    name: "Blog",
    path: "/blog",
  },
];

const Links = () => {
  const [open, setOpen] = useState(false);

  const session = true;
  const isAdmin = true;

  return (
    <div>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.name} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ name: "Admin", path: "/admin" }} />}
            <button className={styles.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ name: "Login", path: "/login" }} />
        )}
      </div>
      <Image className={styles.menuButton} src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen((prev) => !prev)}/>
      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.name} />
          ))}
        </div>
      )}
    </div>
  );
};
export default Links;
