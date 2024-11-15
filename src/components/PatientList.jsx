import React from 'react'
import horizontalBar from '../images/more_horiz_FILL0_wght300_GRAD0_opsz24.svg'

const PatientList = ({data}) => {
    return (
        <div 
            className={data.name === 'Jessica Taylor' ? 
                'patient-list-container-active' 
                :
                'patient-list-container'}>
            {/* left */}
            <div className='patient-details'>
                {/* image */}
                <img src={data.profile_picture} alt="display-photo" />
                <div className='details'>
                    <h4>{data.name}</h4>
                    <p>{data.gender}, <span>{data.age}</span></p>
                </div>
            </div>
            {/* right */}
            <img src={horizontalBar} alt="bar-icon" />
        </div>
    )
}

export default PatientList