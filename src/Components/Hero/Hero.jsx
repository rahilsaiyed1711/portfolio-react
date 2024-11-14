import React from 'react'
import './Hero.css'
import pi from '../../assets/rahil.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={pi} alt=''/>
        <h1><span>I'm Saiyed Rahil,</span> MERN Developer based in A'bad.</h1>
        <p>I am IT undergrad @ GTU and a passionate MERN Development Enthusiast</p>
        <div className='hero-action'>
            <div className='hero-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className='hero-resume'><a href='https://drive.google.com/file/d/1QsVGh7jompwxQyFdZ4XpRmBs3s_YLkZu/view?usp=sharing'>My Resume</a></div>

        </div>
    </div>
  )
}

export default Hero