import React from 'react'
import SideMenu from '../components/SideMenu'
import { FaPlus } from "react-icons/fa6";
import { GoDownload } from "react-icons/go";
import './Home.css'
const userData = {
    name: 'Oscar Gonzales',
    lastLogin: '2021-10-05 10:20 a.m.',

}

function Home() {
  return (
    <div className='row'>
        <SideMenu className='col-3'/>
        <div className='col-9 homeDiv'>
            <h1>¡Bienvenido, {userData.name}!</h1>
            <span>Último ingreso: {userData.lastLogin}</span>
            <button>
                <FaPlus />
                Crear evento
            </button>
            <div>
                Tabla
            </div>
        </div>
      
    </div>
  )
}

export default Home
