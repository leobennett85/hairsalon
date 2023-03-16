import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Portfolio",
    element: <Portfolio />,
  },
  {
    path: "/Services",
    element: <Services />,
  },
  {
    path: "/Products",
    element: <Products />,
  },
  {
    path: "/Testimonials",
    element: <Testimonials />,
  },
]);
