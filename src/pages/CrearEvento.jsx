import React from 'react'
import { useState } from 'react'
import SideMenu from '../components/SideMenu'
import './CrearEvento.css'

function CrearEvento() {
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = "eyJhbGciOiJSUzI1NiJ9.eyJkaXZpc2lvbiI6IkJpZW5lc3RhciIsInN1YiI6IlByb2JhbmRvMTIiLCJyb2xlIjoiYWRtaW4iLCJpc3MiOiJtcy1hdXRoIiwiZXhwIjoxNzI1NTY1ODU2LCJpYXQiOjE3MjU1NjIyNTZ9.ZPCG8n7DhlOxBqb9DJgVdMagKJbiQHFlDysVEkya13hYIb8FDNuXqWVwXFJSlTi2dPWNw3cc45-JCrG_TaTRMKG47jwxpUNT6o-0cKcLBumO5MmjvumGqH5CeIrTB805Ct94oUWO7O5tugGD29-JL-8gLFEXzh1IXD9MGCzfWK1NzK0SZAZbzMlMiAboMbZIWGQ3x6KVdFQnzqActl_scpTxYwb5GWZcPPlXGoRboFriY0nEk98rKfYYPR8HpoVnucRe8iL6DgGdYoKJrn07ntTFXXBy-522Q3edL6voEO1lqgZ-hcYQE1hWuRl4-m0z_olvayZHieD_hQAJfRCZIQ";
        if (!token) {
        console.error("Token no disponible. No tienes acceso.");
        setMessage("Error: Token no disponible. No tienes acceso.");
        return;
        }

        const dateString = e.target.fechaI.value;
        console.log("Valor del campo de fecha:", dateString);
        const isoDate = `${dateString}T00:00:00`;
        console.log("Fecha en formato ISO:", isoDate)

        const eventData = {
          eventName: e.target.nombre.value,
          eventDescription: e.target.descripcion.value,
          startDate: isoDate,
          responsibleUserId: e.target.responsable.value,
          createdAt: new Date().toISOString(),
        };
    
        try {
          const response = await fetch("http://localhost:20000/event/create", {
            method: "POST",
            headers: { "Content-Type": "application/json",
                "Authorization": `Bearer ${token}` },
            body: JSON.stringify(eventData),
          });
          response.ok ? console.log("Evento creado", await response.json()) : console.error("Error");
          
          if (response.ok) {
            const createdEvent = await response.json();
            console.log("Evento creado exitosamente:", createdEvent);
            setMessage("Evento creado exitosamente.");
          } else {
            const errorMessage = await response.text();
            console.error("Error al crear el evento:", errorMessage);
            setMessage("Error al crear el evento: " + errorMessage);
          }
        } catch (error) {
          console.error("Error en la petición:", error);
          setMessage("Error: No se pudo conectar con el servidor.");
        }
      };

  return (
    <div className='row'>
        <SideMenu/>
        <div className='col-10 homeDiv'>
            <h1>Nuevo Evento</h1>
            <form action="" onSubmit={handleSubmit}>
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
                <button className='buttonP' id='crearBtn'>
                Crear evento
                </button>
            </form>

            {message && <p>{message}</p>}
        </div>
      
    </div>
  )
}

export default CrearEvento
