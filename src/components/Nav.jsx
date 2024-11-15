import React from 'react'
import navIconImg1 from '../images/home_FILL0_wght300_GRAD0_opsz24.svg'
import navIconImg2 from '../images/group_FILL0_wght300_GRAD0_opsz24.svg'
import navIconImg3 from '../images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg'
import navIconImg4 from '../images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg'
import navIconImg5 from '../images/credit_card_FILL0_wght300_GRAD0_opsz24.svg'
import docImage from '../images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png'
import settingsImg from '../images/settings_FILL0_wght300_GRAD0_opsz24.svg'
import moreVertImg from '../images/more_vert_FILL0_wght300_GRAD0_opsz24.svg'

const navItems = [
  { id: 1, imageSrc: navIconImg1, altText: "house-icon", text: "Overview"},
  { id: 2, imageSrc: navIconImg2 , altText: "patient-icon", text: "Patients", active: true },
  { id: 3, imageSrc: navIconImg3 , altText: "schedule-icon", text: "Schedule"},
  { id: 4, imageSrc: navIconImg4 , altText: "message-icon", text: "Message"},
  { id: 5, imageSrc: navIconImg5 , altText: "transaction-icon", text: "Transactions"},
]

const Nav = () => {
  return (
    <div className='nav'>
      {/* logo image */}
      <div className='nav-logo'></div>
      {/* middle nav section */}
      <div className="nav-items">
          {navItems?.map((item) => (
            <div key={item.id} className={item.active ? "item-active" : "item"}>
              <img 
                src={item.imageSrc} 
                alt={item.altText}
                className='nav-icon'
              />
              <span>{item.text}</span>
            </div>
          ))}
      </div>
      {/* nav right section */}
      <div className='nav-right'>
        {/* Img section */}
        <img src={docImage} alt='smile-woman' />
        <div>
          <h4>Dr. Jose Simmons</h4>
          <span>General Practitioner</span>
        </div>

        {/* line */}
        <div className='line'></div>

        {/* settings section */}
        <div className='nav-right-settings'>
          <img src={settingsImg} alt="img" />
          <img src={moreVertImg} alt="img" />
        </div>
      </div>
    </div>
  )
}

export default Nav