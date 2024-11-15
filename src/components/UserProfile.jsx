import UserInfo from '../components/UserInfo'
import downloadIcon from '../images/download_FILL0_wght300_GRAD0_opsz24 (1).svg'

let FILTERED_USER = 'Jessica Taylor'

const UserProfile = ({userData}) => {
  return (
    <div className="user-profile-container">
      {/* filtered user details */}
      {userData?userData.filter(user => user.name === FILTERED_USER).map((user) =>
        (<div key={user.name} className='user-info'>
          <UserInfo user={user} />
          {/* lab results section */}
          <div className="lab-results">
            <h3>Lab Results</h3>
            {user?.lab_results.map((results => (
              <div key={results[0]} className='results'>
                <p>{results}</p>
                <img className='res-img' src={downloadIcon} alt="icon" />
              </div>
            )))}
          </div>
      </div>))
      : (<p>No user details</p>)}
    </div>
  )
}

export default UserProfile