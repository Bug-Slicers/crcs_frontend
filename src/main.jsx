import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import Home from "./components/root/home";
import ErrorPage from "./routes/error-page";
import Applications from "./components/root/applications";
import Charts from "./components/root/charts";
import Amendments from "./components/root/amendments";
import CRCS_MIS from "./components/root/crcs-mis/crcs-mis";
import Reports from "./components/root/reports";
import Admin from "./routes/admin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "applications",
        element: <Applications />,
      },
      {
        path: "amendments",
        element: <Amendments />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "signup",
        element: <CRCS_MIS />,
      },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "charts",
        element: <Charts />,
      },
      {
        path: "applications",
        element: <Applications />,
      },
      {
        path: "amendments",
        element: <Amendments />,
      },
      {
        path: "reports",
        element: <Reports />,
      },
      {
        path: "signup",
        element: <CRCS_MIS />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
