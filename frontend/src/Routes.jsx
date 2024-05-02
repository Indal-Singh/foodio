import React from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "pages/NotFound";
import Menu from "pages/Menu";
import Reservation from "pages/Reservation";
import Checkout from "pages/Checkout";
import Homepage from "pages/Homepage";
import OrderonlinePage from "pages/Orderonline";
import ContactPage from "pages/Contact";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Homepage /> },
    { path: "*", element: <NotFound /> },
    {
      path: "menu",
      element: <Menu />,
    },
    {
      path: "reservation",
      element: <Reservation />,
    },
    {
      path: "checkout",
      element: <Checkout />,
    },
    {
      path: "homepage",
      element: <Homepage />,
    },
    {
      path: "orderonline",
      element: <OrderonlinePage />,
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
