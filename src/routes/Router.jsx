import React from "react";
import { useRoutes } from "react-router-dom";
import AdminLayout from "../layouts/admin/AdminLayout";
import AdminPage from "../pages/admin/AdminPage";

export default function Router() {
  const routing = useRoutes([
    {
      path: "/",
      element: <AdminLayout />,
      children: [
        {
          path: "/",
          element: <AdminPage />,
        },
      ],
    },
  ]);

  return routing;
}
