import { type } from "os";
import styles from "./AppButton.module.scss";

interface IProps {
  children: string;
  onClick?: any;
  type: any;
}

export const AppButton = ({ children, onClick, type }: IProps) => {
  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};
