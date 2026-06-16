// import React from 'react';
// import { BrowserRouter } from 'react-router';

// export default AllRoute;
// routes.jsx
import { createBrowserRouter } from "react-router";

import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Dashboard from "../pages/Dashboard.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Home,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  }
]);