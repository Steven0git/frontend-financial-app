/**
 * Root import (dont touch this.)
 */
import React, { lazy } from "react";
import ReactDOM from "react-dom/client";

/**
 * Base import (manageable && editable)
 */
import Router from "./router.jsx";
import "css/_base.css";

const App = lazy(() => import("./App.jsx"));

const root = document.getElementById("root");
const route = new Router();

route.add({
  path: "/",
  element: <App />,
});

ReactDOM.createRoot(root).render(
  <React.StrictMode>{route.getRouter()}</React.StrictMode>,
);
