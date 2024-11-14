import React from 'react'
import './Work.css'
import tp from '../../assets/theme_pattern.svg'
import wdata from '../../assets/mywork_data'
import arr from '../../assets/arrow_icon.svg'
const Work = () => {
  return (
    <div id='work' className='work'>
    <div className='work-title'>
        <h1>My Latest Work</h1>
        <img src={tp} alt=''/>
    </div>
    <div className='work-container' style={{}}>
        {wdata.map((work,idx)=>{
            return <img key={idx} src={work.w_img} alt=''/>
        })}
    </div>
        <div className='work-show-more'>
            <p>Show More</p>
            <img src={arr} alt=''/>
        </div>
    </div>
  )
}

export default Work