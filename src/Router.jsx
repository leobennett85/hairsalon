import { createBrowserRouter } from "react-router-dom";
import Splash from "./Splash/Splash";
import Home from "./Home";
import SvgLogo from "./SVGPRACTICE/SvgLogo";
import Test from "./TEST/Test";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Test />,
  },
  {
    path: "/Splash",
    element: <Splash />,
  },
  {
      path: "/SvgLogo",
      element: <SvgLogo />,
  },
  {
    path: "/Home",
    element: <Home />,
  },
  {
    path: "/Portfolio",
    element: <>Portfolio</>,
  },
  {
    path: "/Services",
    element: <>Services</>,
  },
  {
    path: "/Products",
    element: <>Products</>,
  },
  {
    path: "/Testimonials",
    element: <>Testimonials</>,
  },
]);
