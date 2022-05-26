import React from 'react'
import './heroStyle.css'
// import { Typography } from '@material-ui/core'
import x3Bottle1 from '../../assets/Bottles.png'
import nuvo from '../../assets/nuvo.png'
import adLogo from '../../assets/logo.png'

const Hero = () => {
  return (
     <div className="overlap-group1">
          <div className="backdrop"></div>
          {/* <img className="ellipse-1" alt='elipse' src="ellipse-1.svg" /> */}
          <div className="img-group">
            {/* BG-images */}
            <img className="novu-removebg-preview-1" alt='nuvo' src={nuvo} />
            <img className="x3-bottle-1" src={x3Bottle1} alt='x3bottle'/>

          </div>
          <div className="adLogo" style={{ backgroundImage: `url(${adLogo})` }}></div>
          <h1 className="welcome">
            WELCOME
          </h1>
          <div className="explore-a-brand-made-just-for-you">
            <h2>Explore a Brand made for you</h2>
          </div>
          <img className="arrow-1" src="" alt='arrow'/>
        </div>
     
  )
}

export default Hero