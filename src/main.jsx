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
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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

createRoot(document.getElementById("root")).render( // Use createRoot to render your application
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
