import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import PgDashboard from './Fx/A/PgDashboard.jsx';
import PgDesign from './Fx/A/PgDesign.jsx';
import NotFound from './Fx/A/NotFound.jsx';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", // Set the root path to navigate to the dashboard by default
        element: <Navigate to="/dashboard" replace />, // Navigate to dashboard by default
      },
      {
        path: "dashboard",
        element: <PgDashboard />,
        errorElement: <NotFound />,
      },
      {
        path: "designs",
        element: <PgDesign />,
        errorElement: <NotFound />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);