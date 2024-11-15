import React, { Fragment } from 'react'
import UserChart from '../components/UserChart'
import UserDiagnostics from './UserDiagnostics'

const FILTERED_USER = 'Jessica Taylor'

const Diagnostics = ({userData}) => {
  return (
    <div className='diagnostics'>
      {/* filtered user details */}
      {userData?
        userData
          .filter(user => user.name === FILTERED_USER)
          .map(
            (user) =>(
            <Fragment key={user.name}>
              <div className='diag-history'>
                    <h3>Diagnostics History</h3>
                    <UserChart history={user.diagnosis_history} />
              </div>
              <div className='diag-list'>
                <h3>Diagnostics List</h3>
                <UserDiagnostics diagnosis={user.diagnostic_list} />
              </div>
            </Fragment>
          )) :
          (<p>No User Data</p>)
      }
    </div>)}

export default Diagnostics