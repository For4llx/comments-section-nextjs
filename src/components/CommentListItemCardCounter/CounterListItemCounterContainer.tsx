import styles from "./CounterListItemCounter.module.scss";

interface IProps {
  children: any;
}

export const CounterListItemCounterContainer = ({ children }: IProps) => {
  return <div className={styles.container}>{children}</div>;
};
