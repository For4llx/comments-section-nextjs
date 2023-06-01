import { Paragraph } from "../app/Paragraph";
import { Counter } from "../counter";
import { CommentAction } from "./action";
import { CommentContainer } from "./CommentContainer";
import { CommentProfile } from "./profile";

export const Comment = () => {
  return (
    <CommentContainer>
      <CommentProfile />
      <CommentAction />
      <Paragraph>
        Impressive! Though it seems the drag feature could be improved. But
        overall it looks incredible. You’ve nailed the design and the
        responsiveness at various breakpoints works really well.
      </Paragraph>
      <Counter value={0} />
    </CommentContainer>
  );
};
