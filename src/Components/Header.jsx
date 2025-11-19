import React, { useContext, useState } from "react";
import { PostListMethods } from "../Store/PostListContext";
import { Link } from "react-router-dom";

const Header = ({ selectedTab, setSelectedTab }) => {
  const [searchText, setSearchText] = useState("");
  const { searchPost } = useContext(PostListMethods);

  const handleSearchText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  const filteredPost = (e) => {
    e.preventDefault();
    searchPost(searchText);
  };

  return (
    <>
      <header
        className="p-3 text-bg-dark"
        style={{ borderBottom: "1px solid white" }}
      >
        {" "}
        <div className="container">
          {" "}
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            {" "}
            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
            >
              {" "}
              <svg
                className="bi me-2"
                width="40"
                height="32"
                role="img"
                aria-label="Bootstrap"
              >
                <use xlinkHref="#bootstrap"></use>
              </svg>{" "}
            </a>{" "}
            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              {" "}
            </ul>{" "}
            <div
              className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3"
              role="search"
            >
              {" "}
              <input
                onChange={handleSearchText}
                value={searchText}
                type="search"
                className="form-control form-control-dark text-bg-dark"
                placeholder="Search..."
                aria-label="Search"
              />{" "}
            </div>{" "}
            <div className="text-end"> </div>
            <div className="user-handler">
              <ul className="user-post-handler">
                <li onClick={() => setSelectedTab("Home")} className="nav-item">
                  <Link
                    to="/home"
                    className={`user-home-tab ${
                      selectedTab === "Home" && "user-home-tab-active"
                    }`}
                    aria-current="page"
                  >
                    <svg
                      className="bi pe-none me-2"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <use xlinkHref="#home"></use>
                    </svg>
                    Home
                  </Link>
                </li>

                <li onClick={() => setSelectedTab("Create post")}>
                  <Link
                    to="/create-post"
                    className={`user-post-tab ${
                      selectedTab === "Create Post" && "user-post-tab-active"
                    }`}
                  >
                    <svg
                      className="bi pe-none me-2"
                      width="16"
                      height="16"
                      aria-hidden="true"
                    >
                      <use xlinkHref="#speedometer2"></use>
                    </svg>
                    Create Post
                  </Link>
                </li>
              </ul>
              <div className="search-btn-container">
                <button onClick={filteredPost} className="search-btn">
                  Search
                </button>
              </div>
            </div>
          </div>{" "}
        </div>{" "}
      </header>
    </>
  );
};

export default Header;
