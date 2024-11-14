import React from 'react'
import './Services.css'
import tp from '../../assets/theme_pattern.svg'
import sdata from '../../assets/services_data'
import arr from '../../assets/arrow_icon.svg'
const Services = () => {
    return (
        <div id='services' className='Services'>
            <div className='services-title'>
                <h1>My Services</h1>
                <img src={tp} alt='' />
            </div>
            <div className='services-container'>
                {sdata.map((service, idx) => {
                    return <div key={idx} className='services-format'>
                        <h3>{service.s_no}</h3>
                        <h2>{service.s_name}</h2>
                        <p>{service.s_desc}</p>
                        <div className='services-readmore'>
                            <p>Read More</p>
                            <img src={arr} alt=''/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
export default Services