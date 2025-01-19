import stylesBtn from "./Button.module.css";

export const Button = ({ value }) => {
  return <button className={stylesBtn.btn}>{value}</button>;
};
