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
import UserManage from "route/UserManage.jsx";

/**
 * Anonymous Page
 */
const Home = lazy(() => import("page/Home.jsx"));
const Login = lazy(() => import("page/Login.jsx"));
const Register = lazy(() => import("page/Register.jsx"));

/**
 * Router Initialize
 */
const root = document.getElementById("root");
const route = new Router();

/**
 * User Management
 */
if (import.meta.env.VITE_IS_PRODUCTION == "true") {
  const BASE_URL = import.meta.env.VITE_PRODUCTION_BASE_URL;
  console.info("using VITE_IS_PRODUCTION...");
  route.add({
    path: `${BASE_URL}/`,
    element: <Home />,
  });
  route.add({
    path: `${BASE_URL}/login`,
    element: <Login />,
  });
  route.add({
    path: `${BASE_URL}/register`,
    element: <Register />,
  });
} else {
  console.log("dev mode....");
  const UserManager = new UserManage(import.meta.env.VITE_TOKEN_NAME);
  if (UserManager.isUser()) {
    route.add({
      path: "/",
      element: UserManager.homePage(),
    });
    route.add({
      path: "/logout",
      element: <UserPrivilage.Logout />,
    });
    route.add({
      path: "/add",
      element: UserManager.addPage(),
    });
    route.add({
      path: "/show",
      element: UserManager.showPage(),
    });
  } else {
    route.add({
      path: "/",
      element: <Home />,
    });
    route.add({
      path: "/login",
      element: <Login />,
    });
    route.add({
      path: "/register",
      element: <Register />,
    });
  }
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>{route.getRouter()}</React.StrictMode>,
);
