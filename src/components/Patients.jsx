import React from 'react'
import searchIcon from '../images/search_FILL0_wght300_GRAD0_opsz24.svg'
import PatientList from './PatientList'

const Patients = ({userData}) => {    

  return (
    <div className='patients'>
      <div className='patient-top'>
        <h3>Patients</h3>
        <img src={searchIcon} alt="search-icon" />
      </div>
      <div>
        {userData? userData.map((data) => (
        <div key={data.name}>
            <PatientList data={data} />
        </div>
        )): (<p>No users available</p>)}
      </div>
    </div>
  )
}

export default Patients