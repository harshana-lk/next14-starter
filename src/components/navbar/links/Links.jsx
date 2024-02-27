import styles from "./links.module.css";
import NavLink from "./navLink/navLink";

const Links = () => {
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

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.name} />
      ))}
    </div>
  );
};
export default Links;
