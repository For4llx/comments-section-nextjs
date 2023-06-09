import styles from "./AppParagraph.module.scss";

interface IProps {
  children: any;
}

export const Paragraph = ({ children }: IProps) => {
  return <p className={styles.paragraph}>{children}</p>;
};
