import styles from "./Counter.module.scss";

interface IProps {
  value: number;
}

export const CounterInput = ({ value }: IProps) => {
  return <input className={styles.input} value={value} readOnly />;
};
