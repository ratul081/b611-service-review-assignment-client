import FoodDetails from "../../Pages/Foods/FoodDetails";
import Foods from "../../Pages/Foods/Foods";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Layers/Main";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register";

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
      },
      {
        path: "/food/:id",
        element: <FoodDetails></FoodDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`)
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      }
    ]
  }
])