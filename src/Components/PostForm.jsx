import React, { useContext, useState } from "react";
import { PostListMethods } from "../Store/PostListContext";
import { useNavigate } from "react-router-dom";

const PostForm = () => {
  const { addPost } = useContext(PostListMethods);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");
  const [name, setName] = useState("");
  const navigateToHome = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleTagChange = (e) => {
    setTags(e.target.value.split(","));
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const newPost = (e) => {
    e.preventDefault();
    if (title && content && tags && name) {
      addPost(title, content, tags, name);
      setTitle("");
      setName("");
      setContent("");
      setTags("");
      navigateToHome("/home");
    }
  };

  return (
    <>
      <div className="entire-form">
        <form onSubmit={newPost}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Enter your Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              onChange={handleNameChange}
              value={name}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Post Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              onChange={handleTitleChange}
              value={title}
              placeholder="Post Title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="content" className="form-label">
              Post Content
            </label>
            <input
              type="text"
              className="form-control"
              id="content"
              onChange={handleContentChange}
              value={content}
              placeholder="Tell us more about it"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label">
              Post Tags
            </label>
            <input
              type="text"
              className="form-control"
              id="tags"
              onChange={handleTagChange}
              value={tags}
              placeholder="Please use comma to separate tags"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Create Post
          </button>
        </form>
      </div>
    </>
  );
};

export default PostForm;
