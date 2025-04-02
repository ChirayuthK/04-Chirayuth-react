import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import UserSector from "./pages/UserSector";
import AdminSector from "./pages/AdminSector";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-4xl">404 - Page Not Found 🧙‍♂️</h1>
      </div>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "UserSector", element: <UserSector /> },
      { path: "AdminSector", element: <AdminSector /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;