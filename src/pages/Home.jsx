import React from "react";
import SideMenu from "../components/SideMenu";
import { FaPlus } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import "./Home.css";
const userData = {
  name: "Oscar Gonzales",
  lastLogin: "2021-10-05 10:20 a.m.",
};
const tableData = [
  {
    name: "Evento 1",
    date: "2021-10-05",
    status: "Activo",
    actions: <GoDownload />,
  },
  {
    name: "Evento 2",
    date: "2021-10-05",
    status: "Activo",
    actions: <GoDownload />,
  },
  {
    name: "Evento 3",
    date: "2021-10-05",
    status: "Activo",
    actions: <GoDownload />,
  },
  {
    name: "Evento 4",
    date: "2021-10-05",
    status: "Activo",
    actions: <GoDownload />,
  },
  {
    name: "Evento 5",
    date: "2021-10-05",
    status: "Activo",
    actions: <GoDownload />,
  },
];

function Home() {
  return (
    <div className="row">
      <div className="homeDivP">
        <div className="header">
          <h1 className="bienvenida">¡Bienvenido, {userData.name}!</h1>
          <span>Último ingreso: {userData.lastLogin}</span>
          <button className="buttonP crearHbtn">
            <FaPlus />
            Crear evento
          </button>
        </div>

        <div>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => (
                <tr key={index}>
                  <td>{data.name}</td>
                  <td>{data.date}</td>
                  <td>{data.status}</td>
                  <td>{data.actions}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <nav className="paginationNav">
            <ul className="pagination">
              <li className="page-item"></li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  4
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  5
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  6
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  7
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  8
                </a>
              </li>
              <li className="page-item"></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Home;
