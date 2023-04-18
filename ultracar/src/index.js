import React from 'react';
import ReactDOM from 'react-dom/client';
import RegisterClient from './pages/RegisterClient';
import QrCodeScanner from './pages/QrCodeScam';
import StartService from './pages/StartService';
import Services from './pages/Services';
import "./Global.css";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter(
  [
    {
      path: "/register-client",
      element: <RegisterClient />
    },
    {
      path: "/qr-scanner",
      element: <QrCodeScanner />
    },
    {
      path: "/services",
      element: <Services />
    },
    {
      path: "/iniciar-servico",
      element: <StartService />
    }
]
   
  )
;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);