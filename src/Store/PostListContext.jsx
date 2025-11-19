import { createContext } from "react";

const defaultContext = {
  userPost: [],
  addPost: () => {},
  deletePost: () => {},
  initialPost: () => {},
  searchPost: () => {},
};

export const PostListMethods = createContext(defaultContext);
