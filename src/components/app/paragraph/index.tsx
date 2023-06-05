import styles from "./AppParagraph.module.scss";

interface IProps {
  children: string;
}

export const Paragraph = ({ children }: IProps) => {
  return <p className={styles.paragraph}>{children}</p>;
};
