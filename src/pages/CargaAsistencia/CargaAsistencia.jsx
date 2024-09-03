import React from 'react'
import SideMenu from "../../components/SideMenu";
import "./CargaAsistencia.css";

function CargaAsistencia() {
  return (
    <div className="row">
      <div className="homeDiv cargaAsis">
        <h1>
            Evento 1
        </h1>
        <div>
        <button className='buttonP'>
            Carga por código
        </button>
        <button className='buttonS'>
            Carga manual
        </button>
        </div>
      </div>
    </div>
  )
}

export default CargaAsistencia
