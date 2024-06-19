import * as React from "react";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Users from "./Pages/UsersPage/Users";
import Products from "./Pages/Products/Products";
import Layout from "../Layout/Layout";
import Product from "./Pages/Product/Product";
import User from "./Pages/User/User";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "Users",
          element: <Users />,
        },
        {
          path: "Products",
          element: <Products />,
        },
        {
          path: "/Users/:id",
          element: <User />,
        },
        {
          path: "/Products/:id",
          element: <Product />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
