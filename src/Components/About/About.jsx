import React from 'react'
import './About.css'
import tp from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/rahil2.jpg'
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
const About = () => {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <div id='about' className='about'>
            <div className='about-title'>
                <h1>About Me</h1>
                <img src={tp} alt='no img' />
            </div>
            <div className='about-sections'>
                <div className='about-left'>
                    <img src={profile_img} />
                </div>
                <div className='about-right'>
                    <div className='about-para'>
                        <p>I am a skilled MERN stack developer with a strong background in creating full-stack applications, including an e-commerce platform and a Netflix clone. He has experience handling real-time APIs, advanced authentication systems, and various data management solutions.</p>
                        <p>I have also worked with tools like Firebase, Flask, and BigQuery, and is continuously building expertise in security and Agile principles. His portfolio showcases an ability to design responsive, interactive web applications with a keen eye for efficiency and modern design.         </p>
                    </div>
                    <div className='about-skills'>
                            <div className='about-skill'><p>React.js</p> <hr style={{width:"70%"}}/> </div>
                            <div className='about-skill'><p>Node.js</p> <hr style={{width:"80%"}}/> </div>
                            <div className='about-skill'><p>Databases</p> <hr style={{width:"50%"}}/> </div>
                            <div className='about-skill'><p>Java</p> <hr style={{width:"70%"}}/> </div>
                    </div>
                </div>
            </div>

            <div className="about-achivements" ref={ref}>
                <div className="about-achivement">
                    <h1>
                        {inView && <CountUp end={2} duration={5} />}+
                    </h1>
                    <p>Internships</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>
                        {inView && <CountUp end={20} duration={5} />}+
                    </h1>
                    <p>Major and minor Projects</p>
                </div>
                <hr />
                <div className="about-achivement">
                    <h1>
                        {inView && <CountUp end={100} duration={5.5} />}+
                    </h1>
                    <p>Leetcode problems solved</p>
                </div>
            </div>


        </div>
    )
}

export default About
