import React from 'react'
import ACLogo from './ACLogo.png'
import './CSS/homePage.css'

function homePage() {
  return (
    <div id='home-main-div'>

      <div id='img-div'>
        <img id='logo-img' src={ACLogo} />
      </div>

      {/* down here need inline list of page options */}
    </div>
  )
}

export default homePage