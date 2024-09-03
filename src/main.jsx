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
import CrearEvento from "./pages/Crear/CrearEvento.jsx";
import CrearUsuario from "./pages/Crear/CrearUsuario.jsx";
import TusEventos from "./pages/TusEventos/TusEventos.jsx";
import CargaAsistencia from "./pages/CargaAsistencia/CargaAsistencia.jsx";
import Layout from "./components/Layout.jsx";
import CrearSuccess from "./pages/Crear/CrearSuccess.jsx";
import CrearFailed from "./pages/Crear/CrearFailed.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
          path: "/",
          element: <div className="text-center"><h1>Página principal</h1></div>
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
        path: "/userSuccess",
        element: <CrearSuccess />
      },
      {
        path: "/userFailed",
        element: <CrearFailed />
      },
      {
        path: "/tusEventos",
        element: <TusEventos />
      },
      {
        path: "/cargaAsistencia",
        element: <CargaAsistencia />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />

  </React.StrictMode>
);
