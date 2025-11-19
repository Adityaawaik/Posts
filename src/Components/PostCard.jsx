import React, { useContext, useState } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { PostListMethods } from "../Store/PostListContext";

const PostCard = ({ posts }) => {
  const { deletePost } = useContext(PostListMethods);

  const [isLikeBtnActive, setIsLiveBtnActive] = useState(false);
  const [isDislikeBtnActive, setIsDisLikeBtnActive] = useState(false);

  const handleLikeBtn = () => {
    setIsLiveBtnActive(!isLikeBtnActive);
    setIsDisLikeBtnActive(false);
  };

  const handleDislikeBtn = () => {
    setIsDisLikeBtnActive(!isDislikeBtnActive);
    setIsLiveBtnActive(false);
  };

  return (
    <>
      <div className="card user-post-card">
        <div className="card-body">
          <h5 className="card-title user-post-title">{posts.title}</h5>
          <textarea
            disabled
            className="user-post-content"
            value={posts.body}
          ></textarea>
          {posts.tags.map((tag, index) => (
            <span key={index} className="badge text-bg-light tags">
              {tag}
            </span>
          ))}

          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            <MdDeleteOutline
              onClick={() => deletePost(posts.id)}
              className="delete-icon"
            />
          </span>

          <div className="user-reaction-btn">
            <button
              onClick={handleLikeBtn}
              className={`like-btn ${isLikeBtnActive && "like-btn-active"}`}
            >
              Like
            </button>
            <button
              onClick={handleDislikeBtn}
              className={`dislike-btn ${
                isDislikeBtnActive && "dislike-btn-active"
              }`}
            >
              DisLike
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
