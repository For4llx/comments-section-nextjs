import { IUser } from "@/interfaces/user";
import { createContext } from "react";
import currentUser from "@/data/user.json";

interface IProps {
  currentUser: IUser;
}

export const CommentContext = createContext({
  currentUser,
} as IProps);
