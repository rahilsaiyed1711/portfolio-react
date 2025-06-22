import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logor.png'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import mo from '../../assets/menu_open.svg'
import mc from '../../assets/menu_close.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = '0';
        setIsMenuOpen(true);
    }

    const closeMenu = () => {
        menuRef.current.style.right = '-350px';
        setIsMenuOpen(false);
    }

    return (
        <div className='navbar'>
            <img className='logor' src={logo} alt='no img' />
            {!isMenuOpen && <img src={mo} alt='no img' onClick={openMenu} className='nav-mob-open' />}

            <ul ref={menuRef} className='nav-menu'>
                {isMenuOpen && <div className="close-btn" onClick={closeMenu}><img src={mc} alt='no img' /></div>}

                <li><AnchorLink className='anchor-link' href='#home'><p onClick={() => { setMenu("home") }}>Home</p></AnchorLink>{menu === "home" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={() => { setMenu("about") }}>About Me</p></AnchorLink>{menu === "about" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={() => { setMenu("services") }}>Services</p></AnchorLink>{menu === "services" ? <img src={underline} alt='' /> : <></>}</li>
                <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={() => { setMenu("work") }}>My Work</p></AnchorLink>{menu === "work" ? <img src={underline} alt='' /> : <></>}</li>
                <li>
                    <Link className='anchor-link' to='/blogs' onClick={() => setMenu("blogs")}>
                        Blogs
                    </Link>
                    {menu === "blogs" ? <img src={underline} alt='' /> : null}
                </li>

                <li><AnchorLink className='anchor-link' offset={50} href='#experience'><p onClick={() => { setMenu("experience") }}>experience</p></AnchorLink>{menu === "experience" ? <img src={underline} alt='' /> : <></>}</li>
            </ul>
            <div className='nav-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></div>
        </div>
    )
}

export default Navbar