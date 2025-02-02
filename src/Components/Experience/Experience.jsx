import React from 'react'
import './Experience.css'
import tp from '../../assets/theme_pattern.svg'
import adani from '../../assets/Adani_logo.jpg'
const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className='experience-title'>
        <h1>Experience</h1>
        <img src={tp} alt=''/>
      </div>
      
      <div className='experience-container'>
        <div className='experience-card'>
          <img
            src="https://cdn.theorg.com/d6678a32-706f-4e32-9fed-8368252db631_thumb.jpg"
            alt="Mayora Logo"
            className="company-logo"
          />
          <div className="experience-details">
            <h2>Backend Developer Intern</h2>
            <h3>Mayora Infotech</h3>
            <p className="duration">Feb 2025 - Present</p>
            
            <div className="description">
              Learned and worked on the web application using ReactJS, Redux, Material UI, and Node.js.
            </div>
            
            <div className="skills-container">
              <h4>Skills:</h4>
              <div className="skills-list">
                {[
                  "NodeJS",
                  "Redux",
                  "ReactJS",
                  "Material UI",
                  "MongoDB",
                  "Express",
                  "JavaScript",
                ].map((skill, index) => (
                  <div key={index} className="skill-item">• {skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='experience-card'>
          <img
            src= {adani}
            alt="Adani Logo"
            className="company-logo"
          />
          <div className="experience-details">
            <h2>Software Developer Intern</h2>
            <h3>Adani Green Energy Limited</h3>
            <p className="duration">Aug 2023 - Dec 2023</p>
            
            <div className="description">
              Developed and maintained web applications using modern technologies. Worked on data visualization and analytics dashboards.
            </div>
            
            <div className="skills-container">
              <h4>Skills:</h4>
              <div className="skills-list">
                {[
                  "Google-BigQuery",
                  "JavaScript",
                  "HTML, CSS",
                  "RESTful APIs",
                  "Git",
                  "Agile",
                ].map((skill, index) => (
                  <div key={index} className="skill-item">• {skill}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
    
  )
}

export default Experience