import {
  HomeIcon,
  CommandLineIcon,
  UserCircleIcon,
  PencilSquareIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import styles from "./Nav.module.css";
import { Button } from "../button/Button";

export const Nav = () => {
  const icons = [
    { component: HomeIcon, title: "Home" },
    { component: UserCircleIcon, title: "About" },
    { component: CommandLineIcon, title: "Proyectos" },
    { component: PencilSquareIcon, title: "Blog" },
  ];

  return (
    <nav className={styles.navContainer}>
      <ul className={styles.contentMenu}>
        {icons.map((icon, index) => (
          <li key={index}>
            <icon.component className={styles.icon} title={icon.title} />
          </li>
        ))}
      </ul>
      <ul className={styles.containerModeContact}>
        <li>
          <SunIcon className={styles.icon} />
        </li>
        <li>
          <Button value="Contactame" bgColor="#383838" />
        </li>
      </ul>
    </nav>
  );
};
