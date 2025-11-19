import React from "react";
import { Link } from "react-router-dom";

const SideBar = ({ selectedTab, setSelectedTab }) => {
  return (
    <>
      <div
        className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark side-bar"
        style={{
          width: "200px",
          minHeight: "47rem",
          borderRight: "1px solid white",
        }}
      >
        <a
          onClick={(e) => e.preventDefault()}
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <svg
            className="bi pe-none me-2"
            width="40"
            height="32"
            aria-hidden="true"
          >
            <use xlinkHref="#bootstrap"></use>
          </svg>
          <span className="fs-4">Posts</span>
        </a>

        <hr />

        <ul className="nav nav-pills flex-column mb-auto">
          <li
            onClick={() => setSelectedTab("Home")}
            className="nav-item tab-list"
          >
            <Link
              to="/home"
              className={`home-tab ${
                selectedTab === "Home" && "home-tab-active"
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
              className={`post-tab ${
                selectedTab === "Create post" && "post-tab-active"
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
        <hr />
      </div>
    </>
  );
};

export default SideBar;
