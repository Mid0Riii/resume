import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { ConfigContext } from "./context";
import { createHashRouter, RouterProvider } from "react-router-dom";
import config from "./config.json";
import List from "./pages/list";
import Detail from "./pages/detail";
const router = createHashRouter([
  {
    path: "/",
    element: <List />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/detail/:id",
    element: <Detail />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <ConfigContext.Provider value={config}>
      <RouterProvider router={router} />
    </ConfigContext.Provider>
  </React.StrictMode>
);
