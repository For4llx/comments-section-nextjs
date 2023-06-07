import utilsStyles from "../../styles/utils.module.scss";

interface IProps {
  children: any;
}

export const CommentContainer = ({ children }: IProps) => {
  return <div className={utilsStyles.cs}>{children}</div>;
};
