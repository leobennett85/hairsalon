import { createBrowserRouter } from "react-router-dom";
import Splash from "./pages/Splash/Splash";
import Home from "./pages/Home";
import SvgLogo from "./pages/SVGPRACTICE/SvgLogo";


export const router = createBrowserRouter([
  {
    path: "/",
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
