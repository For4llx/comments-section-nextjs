import "./style.css";
import comments from "@/data/comments.json";
import currentUser from "@/data/user.json";

import { CommentList } from "@/components/commentList";
export default function Home() {
  return (
    <main>
      <CommentList comments={comments} currentUser={currentUser} />
    </main>
  );
}
