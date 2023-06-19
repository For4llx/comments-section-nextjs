import { AppButton } from "../app/button";
import { CommentAddTextarea } from "../AppAdd/CommentAddTextarea";
import { CommentListItemCardContentFormContainer } from "./CommentListItemCardContentFormContainer";

interface IProps {
  handleEditComment: any;
  content: string;
  id: any;
}

export const CommentListItemContentForm = ({
  handleEditComment,
  content,
  id,
}: IProps) => {
  return (
    <CommentListItemCardContentFormContainer
      id={id.toString()}
      handleEditComment={handleEditComment}
    >
      <CommentAddTextarea defaultValue={content} />
      <AppButton type="submit">Update</AppButton>
    </CommentListItemCardContentFormContainer>
  );
};
