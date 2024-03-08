import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);