import { RouterProvider } from "react-router";
import { routes } from "./Routes/PublicRoutes/PublicRoute";
import { Toaster } from "react-hot-toast";


function App() {
  return (
    <>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
