import Foods from "../../Pages/Foods/Foods";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Layers/Main";

const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/foods",
        element: <Foods></Foods>,
      }
    ]
  }
])