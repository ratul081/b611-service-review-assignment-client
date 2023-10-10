import Orders from "../../Pages/Orders/Orders";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Layers/Main";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";

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
        element: <Services></Services>,
      },
      {
        path: "/food/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`)
      },
      {
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      }
    ],
  }, {
    path: "*",
    element: <ErrorPage></ErrorPage>

  }
])