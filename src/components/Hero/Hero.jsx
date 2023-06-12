import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../../assets/img/background.png'
import '../../components/Header/Header.css'
function Hero() {
  return (
    <div className='hero'>
        <img className='bgimg' src={Background} alt="" />
        <div className='container'>
            <div className='hero__inner'>

            </div>
        </div>
    </div>
  )
}

export default Hero
