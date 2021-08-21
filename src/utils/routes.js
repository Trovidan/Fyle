//routes for application;

import Home from "../pages/Home";

export const app_routes = [
  {
    path: "/",
    onLogged: true,
    universal: true,
    fallback: "/",
    Component: Home,
    exact: false,
  },
];