import styles from "./AppButton.module.scss";

interface IProps {
  children: string;
}

export const AppButton = ({ children }: IProps) => {
  return <button className={styles.button}>{children}</button>;
};
