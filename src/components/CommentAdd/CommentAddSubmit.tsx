import utilsStyles from "@/styles/utils.module.scss";

interface IProps {
  id: number;
}

export const CommentAddSubmit = ({ id, parentId }: IProps) => {
  return (
    <input
      id={id.toString()}
      className={utilsStyles.button}
      type="submit"
      value="Send"
    />
  );
};
