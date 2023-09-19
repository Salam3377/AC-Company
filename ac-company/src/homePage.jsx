import React from 'react'
import ACLogo from './ACLogo.png'
import './CSS/homePage.css'

function homePage() {
  return (
    <div id='home-main-div'>

      <div id='logo-div'>
        <span><img id='logo-img' src={ACLogo} /></span>
        <span id='header-name'>Kumuk Air 84</span>
      </div>

      {/* down here need inline list of page options */}
    </div>
  )
}

export default homePage