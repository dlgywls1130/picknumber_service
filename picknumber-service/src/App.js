import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "./components/common/Header";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import NavbarLayout from "./components/common/NavbarLayout";
import KioskNavbar from "./components/Service/Kiosk/KioskNavbar";
import IndicatorNavbar from "./components/Service/Indicator/IndicatorNavbar";
import PagerNavbar from "./components/Service/Pager/PagerNavbar";
import ReservationNavbar from "./components/Service/Reservation/ReservationNavbar";
import RootLayout from "./pages/Root";
import Kiosk from "./components/Service/Kiosk/Kiosk";
import Indicator from "./components/Service/Indicator/Indicator";
import Pager from "./components/Service/Pager/Pager";
import Reservation from "./components/Service/Reservation/Reservation";
import KioskRoot from "./pages/KioskRoot";
import KioskTicket from "./components/Service/Kiosk/KioskTicket";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/navbar", element: <Navbar /> },
      // { path: '/navbar/:navbarId', element: <NavbarLayout/>},
      { path: "/kiosk", element: <KioskNavbar /> },
      { path: "/kiosk/:kioskId", element: <Kiosk /> },
      { path: "/indicator", element: <IndicatorNavbar /> },
      { path: "/indicator/:indicatorId", element: <Indicator /> },
      { path: "/pager", element: <PagerNavbar /> },
      { path: "/pager/:pagerId", element: <Pager /> },
      { path: "/reservation", element: <ReservationNavbar /> },
      { path: "/reservation/:reservationId", element: <Reservation /> },
    ],
  },
  {
    path: "/",
    element: <KioskRoot />,
    children: [{ path: "/kiosk/:kioskId", element: <Kiosk /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
