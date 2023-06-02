import { IUser } from "./user";

export interface IComment {
  id: number;
  replyingTo?: string;
  content: string;
  createdAt: string;
  score: number;
  user: IUser;
  replies?: Array<IComment>;
}
