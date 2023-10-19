import Orders from "../../Pages/Orders/Orders";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import Home from "../../Pages/Home/Home";
import Main from "../../Pages/Layers/Main";
import LogIn from "../../Pages/LogIn/LogIn";
import Register from "../../Pages/LogIn/Register";
import ErrorPage from "../../Pages/Shared/ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import MyReviews from "../../MyReviews/MyReviews";
import Blog from "../../Pages/Shared/Blog/Blog";


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
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/service/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) => fetch(`https://service-review-assignment-server-nine.vercel.app/service/${params.id}`)
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
        path: "/blogs",
        element: <Blog></Blog>,
      },
      {
        path: "/orders",
        element: <PrivateRoute><Orders></Orders></PrivateRoute>,
      },
      {
        path: "/my_reviews",
        element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>,
      }
    ],
  }, {
    path: "*",
    element: <ErrorPage></ErrorPage>
  }
])