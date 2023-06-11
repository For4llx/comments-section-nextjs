import { IComment } from "@/interfaces/comment";
import { IUser } from "@/interfaces/user";
import { createContext } from "react";
import currentUser from "@/data/user.json";
import comments from "@/data/comments.json";

interface IProps {
  comments?: Array<IComment>;
  currentUser: IUser;
}

export const CommentContext = createContext({
  currentUser,
  comments,
} as IProps);
