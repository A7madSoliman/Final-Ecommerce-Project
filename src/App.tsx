import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";
import Categories from "./Pages/Categories/Categories";
import CategoryDetails from "./Pages/CategoryDetails/CategoryDetails";
import Products from "./Pages/Products/Products";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import CartPage from "./Pages/CartPage/CartPage";
import ProductsDetails from "./Pages/ProductsDetails/ProductsDetails";
import ForgetPassword from "./Pages/ForgetPassword/ForgetPassword";
import VerifyResetCode from "./Pages/VerifyResetCode/VerifyResetCode";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";

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
        { path: "cart", element: <CartPage /> },
        { path: "products-details/:id", element: <ProductsDetails /> },
        { path: "forgot-password", element: <ForgetPassword /> },
        { path: "verify-reset-code", element: <VerifyResetCode /> },
        { path: "reset-password", element: <ResetPassword /> },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
