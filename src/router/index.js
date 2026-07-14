import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import { getAllPosts } from "../api/todosApi";
import ProtectRouter from "./ProtectRouter";
import TodosPage from "../pages/TodosPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: LoginPage },
      {
        Component: ProtectRouter,
        children: [
          {
            path: "/post",
            Component: TodosPage,
            loader: getAllPosts,
          },
        ],
      },
    ],
  },
]);

export default router;
