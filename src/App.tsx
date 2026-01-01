import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
import Products from "./Pages/Products/Products";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "categories", element: <Categories /> },
        { path: "categories/:id", element: <CategoryDetails /> },
        { path: "products", element: <Products /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
