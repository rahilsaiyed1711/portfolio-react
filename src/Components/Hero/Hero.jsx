import React, { useState, useEffect } from 'react'
import './Hero.css'
import pi from '../../assets/rahil.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  const words = ['Ideas', 'Design', 'Concept', 'Code'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        setIsAnimating(false);
      }, 300); 
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='hero'>
      <img src={pi} alt='' />
      <h1>
        Crafting{' '}
        <span className={`animated-word ${isAnimating ? 'slide-out' : 'slide-in'}`}>
          {words[currentWordIndex]}
        </span>{' '}
        into Digital <span>Experiences</span>
      </h1>
      <p>
        Full Stack Developer with 1+ years delivering 40% faster development using AI tools.{' '}
        <span>I'm Saiyed Rahil,</span> your AI-powered development partner.
      </p>
      <div className='hero-action'>
        <div className='hero-connect'>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Connect With Me
          </AnchorLink>
        </div>
        <div className='hero-resume'>
          <a href='https://drive.google.com/file/d/1QsVGh7jompwxQyFdZ4XpRmBs3s_YLkZu/view?usp=sharing'>
            My Resume
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero