import React, { useContext } from "react";
import { PostListMethods } from "../Store/PostListContext";
import PostCard from "./PostCard";

const PostList = () => {
  const { userPost } = useContext(PostListMethods);
  console.log(userPost.length);

  return (
    <>
      {userPost.map((post, index) => (
        <PostCard key={index} posts={post} />
      ))}
    </>
  );
};

export default PostList;
