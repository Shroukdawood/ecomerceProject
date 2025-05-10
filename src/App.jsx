import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

import { useRoutes } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Login from "./login/Login";
import Error404 from "./pages/error/Error404";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRouter from "./components/ProtectedRouter";
import Register from "./pages/register/Register";
import SearchLogic from "./components/SearchLogic";
import FashionHome from "./home/FashionHome";

function App() {
  const routes = useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/fashionHome",
          element:<FashionHome/>,
        },
        {
          path: "/*",
          element: <Error404 />,
        },
        {
          path:"/search",
          element:<SearchLogic/>
        }
      ],
    },
  ]);

  return (
    <>
    
      <AuthProvider>{routes}</AuthProvider>
    </>
  );
}

export default App;
