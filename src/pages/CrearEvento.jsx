import React from 'react'
import SideMenu from '../components/SideMenu'
import './CrearEvento.css'

function CrearEvento() {
  return (
    <div className='row'>
        <SideMenu className='col-3'/>
        <div className='col-9 homeDiv'>
            <h1>Nuevo Evento</h1>
            <form action="">
                <div>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" name="nombre" id="nombre"/>
                </div>
                <div>
                    <label htmlFor="descripcion">Descripción</label>
                    <input type="longText" name="" id="" />
                </div>
                <div>
                    <label htmlFor="fechaI">Fecha inicial</label>
                    <input type="date" name="fechaI" id="fechaI"/>
                </div>
                <div>
                    <label htmlFor="fechaF">Fecha final</label>
                    <input type="date" name="fechaF" id="fechaF"/>
                </div>
                <div>
                    <label htmlFor="responsable">Responsable</label>
                    <input type="text" name="responsable" id="responsable"/>
                </div>
                <div>
                    <label htmlFor="estudiantes">Estudiantes</label>
                    <button>Adjuntar archivo</button>
                </div>
            </form>
        </div>
      
    </div>
  )
}

export default CrearEvento
