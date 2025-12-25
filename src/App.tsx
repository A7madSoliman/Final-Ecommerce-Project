import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Home from "./Pages/Home/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
