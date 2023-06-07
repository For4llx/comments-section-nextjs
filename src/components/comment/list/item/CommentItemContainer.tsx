import styles from "./CommentItem.module.scss";

interface IProps {
  children: any;
}

export const CommentItemContainer = ({ children }: IProps) => {
  return <div>{children}</div>;
};
