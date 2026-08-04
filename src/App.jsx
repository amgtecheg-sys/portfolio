import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home/Home";
import Harmonic from "./pages/Harmonic/Harmonic";
import ErpSuperSystem from "./pages/ErpSuperSystem/ErpSuperSystem";
import SmartCompound from "./pages/SmartCompound/SmartCompound";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "harmonic",
        Component: Harmonic,
      },
      {
        path: "erp-super-system",
        Component: ErpSuperSystem,
      },
      {
        path: "smart-compound",
        Component: SmartCompound,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
