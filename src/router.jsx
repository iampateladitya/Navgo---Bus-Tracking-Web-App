import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Navbar from './components/navbar'
import Main_site from './components/main_site'
import Landing_page from './pages/landing_page'
import Feature1page from './pages/feature1page'
import Feature2page from './pages/feature2page'
import Feature3page from './pages/feature3page'
import Feature4page from './pages/feature4page'
import Feature5page from './pages/feature5page'
import Feature6page from './pages/feature6page'
import Map from './pages/map'
import Search_page from './pages/search_page'
import All_buses_list from './pages/all_buses_list'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Landing_page />,
      },
      {
        path: "/mainsite",
        element: <Main_site />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/searchpage",
        element: <Search_page />,
      },
      {
        path: "/buseslist",
        element: <All_buses_list />,
      },
      {
        path: "/feature1",
        element: <Feature1page />,
      },
      {
        path: "/feature2",
        element: <Feature2page />,
      },
      {
        path: "/feature3",
        element: <Feature3page />,
      },
      {
        path: "/feature4",
        element: <Feature4page />,
      },
      {
        path: "/feature5",
        element: <Feature5page />,
      },
      {
        path: "/feature6",
        element: <Feature6page />,
      },
    ],
  },
]);

export default router;
