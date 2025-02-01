import React from 'react'
import './Experience.css'
import tp from '../../assets/theme_pattern.svg'
import adani from '../../assets/adani_logo.png'
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
            alt="Lanatus Logo"
            className="company-logo"
          />
          <div className="experience-details">
            <h2>Backend Developer Intern</h2>
            <h3>Lanatus System</h3>
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
            src= "data:image/jpeg;base64,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"
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