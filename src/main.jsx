import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.jsx";

// 🔥 Use HashRouter instead of BrowserRouter
import { createHashRouter, RouterProvider } from "react-router-dom";

import PostList from "./Components/PostList.jsx";
import PostForm from "./Components/PostForm.jsx";

const route = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <div className="user-all-posts">
            <PostList />
          </div>
        ),
      },
      {
        path: "home",
        element: (
          <div className="user-all-posts">
            <PostList />
          </div>
        ),
      },
      {
        path: "create-post",
        element: <PostForm />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>
);
