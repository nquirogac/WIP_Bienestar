import React from 'react'
import SideMenu from '../../components/SideMenu'
import './CrearEvento.css'

function CrearEvento() {
  return (
    <div className='row'>
        
        <div className='homeDiv'>
            <h1>Nuevo Evento</h1>
            <form action="">
                <div className='row formInput' >
                    <label className='col-3' htmlFor="nombre">Nombre</label>
                    <input type="text" className='col-7' name="nombre" id="nombre"/>
                </div>
                <div className='row formInput' >
                    <label className='col-3' htmlFor="descripcion">Descripción</label>
                    <textarea className='col-7'  name="descripcion" id="" rows={5}></textarea>
                </div>
                <div className='row formInput' >
                    <label className='col-3' htmlFor="fechaI">Fecha inicial</label>
                    <input type="date" className='col-7'  name="fechaI" id="fechaI"/>
                </div>
                <div className='row formInput' >
                    <label className='col-3' htmlFor="fechaF">Fecha final</label>
                    <input type="date" className='col-7'  name="fechaF" id="fechaF"/>
                </div>
                <div className='row formInput' >
                    <label className='col-3' htmlFor="responsable">Responsable</label>
                    <input type="text" className='col-7'  name="responsable" id="responsable"/>
                </div>
                <div className='row formInput' >
                    <label className='col-3' htmlFor="estudiantes">Estudiantes</label>
                    <button className='col-7 attached' >Adjuntar archivo</button>
                </div>
            </form>
            <button className='buttonP' id='crearBtn'>
                Crear evento
            </button>
        </div>
      
    </div>
  )
}

export default CrearEvento
