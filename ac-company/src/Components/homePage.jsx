import React from 'react'
import '../CSS/homePage.css'
import Carousel from './carousel'

function homePage() {
  return (
    <div id='home-main-div'>
      

      <Carousel />

      <div className='home-header-text-box'>
        <h1>Some Header</h1>
        <p>some text</p>
      </div>

      <div className='home-header-text-box'>
        <h1>Some Header</h1>
        <p>some text</p>
      </div>

      <div className='home-header-text-box'>
        <h1>Some Header</h1>
        <p>some text</p>
      </div>

    </div>
  )
}

export default homePage