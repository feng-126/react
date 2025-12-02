import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Layout from "@/pages/Layout";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/layout",
        element: <Layout />,
    },
    {
        path: "/",
        element: <App />,
    }
]);

export default router;

    