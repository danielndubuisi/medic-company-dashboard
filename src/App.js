import "@fontsource/manrope"; // Defaults to weight 400
import './App.css';
import Nav from './components/Nav';
import Patients from './components/Patients'
import Diagnostics from './components/Diagnostics'
import UserProfile from './components/UserProfile'

import { useState, useEffect } from "react";
import Spinner from "./components/Spinner";

function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
      let username = process.env.REACT_APP_COALITION_USERNAME;
      let password = process.env.REACT_APP_COALITION_PASSWORD;
      let apiLink = process.env.REACT_APP_API_LINK
      let auth = btoa(`${username}:${password}`);

      // Authenticate (dummy API)
      fetch(apiLink, {
        headers: {
          'Authorization': `Basic ${auth}`
        }
        }).then(function (response) {
        if (response.ok) {
          return response.json();
        }
        throw response;
        }).then(function (data) {
        setUserData(data);
        }).catch(function (error) {
        console.warn(error);
        });
    }, []);


  return (
    <div className="main">
      <div className='container'>
        <Nav />
        {userData? (
          <div className="content-container">
            <Patients userData={userData} />
            <Diagnostics userData={userData}/>
            <UserProfile userData={userData} />
          </div>          
        ) : <Spinner />}
      </div>
    </div>
  );
}

export default App;
