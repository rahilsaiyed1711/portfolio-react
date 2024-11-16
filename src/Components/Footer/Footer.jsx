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
            <p>Terms of services</p>
            <p>Privacy Policies</p>
            <p>Connect with me</p>
            </div>
            </div>
        </div>
    )
}

export default Footer