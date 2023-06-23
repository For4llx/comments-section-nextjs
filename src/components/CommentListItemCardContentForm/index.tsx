import { AppTextarea } from "../AppTextArea";
import { AppButton } from "../AppButton";
import { CommentListItemCardContentFormContainer } from "./CommentListItemCardContentFormContainer";

interface IProps {
  handleEditComment: any;
  content: string;
}

export const CommentListItemContentForm = ({
  handleEditComment,
  content,
}: IProps) => {
  return (
    <CommentListItemCardContentFormContainer
      handleEditComment={handleEditComment}
    >
      <AppTextarea defaultValue={content} />
      <AppButton type="submit">Update</AppButton>
    </CommentListItemCardContentFormContainer>
  );
};
