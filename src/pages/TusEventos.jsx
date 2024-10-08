import React from 'react'
import SideMenu from '../components/SideMenu'
import './TusEventos.css'
import EventCard from '../components/EventCard'

function TusEventos() {
  return (
    <div className='row'>
        <SideMenu/>
        <div className='col-10 homeDiv'>
            <h1>Tus eventos</h1>
            <div className='eventsContainer'>
            <EventCard />
            <EventCard />
            <EventCard />
            </div>
        </div>
      
    </div>
  )
}

export default TusEventos
