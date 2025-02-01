import React from 'react'
import './Footer.css'
import fl from '../../assets/logor.png'
import ui from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer-top'>
                <div className='Footer-top-left'>
                    <img className='logor' src={fl} />
                    <p>"Mastering the MERN stack opens doors to endless possibilities, from crafting real-time chat apps to building entire e-commerce platforms. With a knack for complex features like JWT authentication, admin panels, and seamless API integrations." </p>
                </div>
                <div className='Footer-top-right'>
                    <div className='footer-email-input'>
                        <img src={ui} />
                        <input type='email' placeholder='Enter your email' />
                    </div>
                    <div className='Footer-subscribe'>
                    Subscribe
                    </div>
                </div>
            </div>
            <hr />
            <div className='Footer-bottom'>
            <p className='footer-bottom-left'>© 2024 Saiyed Rahil. All rights reserved</p>
            <div className='Footer-bottom-right'>
            <div className='Footer-bottom-right'>
                <a href="https://www.linkedin.com/in/rahil-saiyed-8541b42a0/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/rahilsaiyed1711" target="_blank" rel="noopener noreferrer">Github</a>
                <a href="https://leetcode.com/u/rahilsaiyed1711/" target="_blank" rel="noopener noreferrer">Leetcode</a>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Footer