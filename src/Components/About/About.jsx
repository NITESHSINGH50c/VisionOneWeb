import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT VISION ONE TECHNOLOGIES</h3>
        <h2>Your Vision, Our Expertise</h2>
        <p>At Vision One Technologies, we transform creative ideas into impactful digital products. Our team is committed to delivering high-quality solutions that truly make a difference. We blend innovation with modern technology to craft digital experiences that stand out. Every project is built with a strong focus on performance and reliability.</p>
        <p>We ensure that each website or application is developed with precision and attention to detail. User experience remains at the core of everything we create. Our goal is to help businesses establish a powerful digital presence through seamless, intuitive, and engaging digital solutions.</p>
        <p>From concept to completion, we work closely with clients to bring their vision to life. We design systems that support long-term growth and scalability. With Vision One Technologies, your digital transformation becomes seamless, efficient, and future-ready.</p>
      </div>
    </div>
  )
}

export default About
