import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './index.css'
import Home from './pages/Home.jsx';
import CrearEvento from "./pages/CrearEvento.jsx";
import CrearUsuario from "./pages/CrearUsuario.jsx";
import TusEventos from "./pages/TusEventos.jsx";
import Login from "./pages/login/Login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
          path: "/",
          element: <Login />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/crearEvento",
        element: <CrearEvento />
      },
      {
        path: "/crearUsuario",
        element: <CrearUsuario />
      },
      {
        path: "/tusEventos",
        element: <TusEventos />
      }
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>
);
