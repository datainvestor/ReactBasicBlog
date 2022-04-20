import styles from "../../styles/AppButton.module.css";
function AppButton({ children, btnStyle, ...buttonProps }) {
  return (
    <button className={`${styles.button} ${styles[btnStyle]}`} {...buttonProps}>
      {children}
    </button>
  );
}

AppButton.defaultProps = {
  btnStyle: "",
};

export default AppButton;
