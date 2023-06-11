import styles from "./AppButton.module.scss";

interface IProps {
  children: string;
  onClick: any;
}

export const AppButton = ({ children, onClick }: IProps) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
