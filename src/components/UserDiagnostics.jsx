import React, { Fragment } from 'react'

const UserDiagnostics = ({diagnosis}) => {
  
  return (
    <div className='user-list-container'>
      <div className="list-header">
        <p>Problem/Diagnosis</p>
        <p>Description</p>
        <p>Status</p>
      </div>
      {diagnosis? diagnosis.map(diag => (
        <Fragment key={diag.name}>
          <div className='list-content'>
            <p>{diag.name}</p>
            <p>{diag.description}</p>
            <p>{diag.status}</p>
          </div>
          <div className='content-line'></div>
        </Fragment>
      )): 
      (<p>No diagnosis</p>)
      }
    </div>
  )
}

export default UserDiagnostics