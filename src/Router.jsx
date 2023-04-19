import { createBrowserRouter } from "react-router-dom";
import Splash from "./Splash/Splash";
import Home from "./Home";
import SvgLogo from "./SVGPRACTICE/SvgLogo";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <SvgLogo />,
  },
  {
    path: "/Splash",
    element: <Splash />,
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
