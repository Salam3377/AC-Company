import React from 'react'
import ACLogo from '../ACLogo.png'
import '../CSS/header.css'

function header() {
  return (
    <div id='home-main-div'>

      <div id='logo-div'>
        <span><img id='logo-img' src={ACLogo} /></span>
        <span id='header-name'>Kumuk Air 84</span>
      </div>

      <div id='div-carousel'></div>

      {/* down here need inline list of page options */}
    </div>
  )
}

export default header