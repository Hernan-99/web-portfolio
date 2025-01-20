import stylesBtn from "./Button.module.css";

export const Button = ({ value, bgColor }) => {
  return (
    <button style={{ backgroundColor: bgColor }} className={stylesBtn.btn}>
      {value}
    </button>
  );
};
