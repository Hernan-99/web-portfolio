import { Nav } from "../navMenu/Nav";
import style from "./Header.module.css";
export const Header = () => {
  return (
    <header className={style.header}>
      <Nav />
    </header>
  );
};
