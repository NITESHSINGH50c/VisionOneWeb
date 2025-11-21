import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
   <div className="hero-text">
      <h1>"Your Vision, Our Expertise"</h1>
        <p>At Vision One Technologies, we turn ideas into powerful digital solutions. We focus on quality, innovation, and seamless user experience to help businesses build strong websites, applications, and digital systems that drive growth.</p>
       {/*<button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>*/} 
      </div>
    </div>
  )
}

export default Hero
