import styles from "./CommentAdd.module.scss";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const CommentAddTextarea = () => {
  return (
    <textarea
      className={`${styles.textarea} ${rubik.className}`}
      placeholder="Add a comment..."
    ></textarea>
  );
};
