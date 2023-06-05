import "./style.css";
import comments from "@/data/comments.json";
import currentUser from "@/data/user.json";
import { Comment } from "@/components/comment";

export default function Home() {
  return (
    <main>
      <Comment comments={comments} currentUser={currentUser} />
    </main>
  );
}
