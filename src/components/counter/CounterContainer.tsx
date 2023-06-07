import styles from "./Counter.module.scss";

interface IProps {
  children: any;
}

export const CounterContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
