interface IProps {
  children: any;
}

export const CommentProfileContainer = ({ children }: IProps) => {
  return <div className="comment__profile">{children}</div>;
};
