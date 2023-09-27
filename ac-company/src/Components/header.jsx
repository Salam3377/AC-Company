import React from 'react'
import { NavLink, Router } from 'react-router-dom'
import ACLogo from '../ACLogo.png'
import '../CSS/header.css'

function header() {
  return (
    <div id='home-main-div'>

      <div id='logo-div'>
        <span><img id='logo-img' src={ACLogo} /></span>
        <span id='header-name'>Kumuk Air 84</span>
      </div>

      <div id='nav-list-div'>

        <NavLink 
          to="/" 
          activeclassname="active" 
          exact="true"
        >Home</NavLink>

        <NavLink 
          to="/heating" 
          activeclassname="active"
        >Heating</NavLink>

        <NavLink 
          to="/ventilation" 
          activeclassname="active"
        >Ventilation</NavLink>

        <NavLink 
          to="/ac" 
          activeclassname="active"
        >A/C</NavLink>

        <NavLink 
          to="/contact" 
          activeclassname="active"
        >Contact Us</NavLink>

      </div>
      
    </div>
  )
}

export default header