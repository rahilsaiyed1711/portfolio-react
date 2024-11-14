import React from 'react'
import './Footer.css'
import fl from '../../assets/footer_logo.svg'
import ui from '../../assets/user_icon.svg'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer-top'>
                <div className='Footer-top-left'>
                    <img src={fl} />
                    <p>lorem kjndincksncdn jksncoinjasoicmaklmckla jdiownmlkdanmkcniuna ckacnz, ckjn clmcjbnjskc</p>
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