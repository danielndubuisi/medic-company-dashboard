import React from 'react'
import dateIcon from '../images/BirthIcon.svg'
import genderIcon from '../images/FemaleIcon.svg'
import contactIcon from '../images/PhoneIcon.svg'
import insuranceIcon from '../images/InsuranceIcon.svg'

const UserInfo = ({user}) => {
    return (
        <div className='user-details'>
            <img 
                src={user.profile_picture} 
                alt='profile-pic'
                className='user-profile'
            />
            <h3>{user.name}</h3>
            <div className='info'>
                <div className='user'>
                    <img src={dateIcon} alt="icon" className='icon' />
                    <p className='user-text'>Date of Birth <br/> <span>{user.date_of_birth}</span></p>
                </div>
                <div className='user'>
                    <img src={genderIcon} alt="icon" className='icon' />
                    <p className='user-text'>Gender <br/> <span>{user.gender}</span></p>
                </div>
                <div className='user'>
                    <img src={contactIcon} alt="icon" className='icon' />
                    <p className='user-text'>Contact info. <br/> <span>{user.phone_number}</span></p>
                </div>
                <div className='user'>
                    <img src={contactIcon} alt="icon" className='icon' />
                    <p className='user-text'>Emergency contact <br/> <span>{user.emergency_contact}</span></p>
                </div>
                <div className='user'>
                    <img src={insuranceIcon} alt="icon" className='icon' />
                    <p className='user-text'>Insurance Provider <br/> <span>{user.insurance_type}</span></p>
                </div>
            </div>
            <a href='#/' className='btn info-btn'><span>Show All Information</span></a>
        </div>
    )
}

export default UserInfo