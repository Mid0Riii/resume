import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import { ConfigContext } from "./context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import config from "./config.json";
import List from "./pages/list";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/list",
    element: <List />,
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
