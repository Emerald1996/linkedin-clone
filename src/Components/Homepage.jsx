import React from 'react'
import Rightsidebar from '../Components/Rightsidebar';
import Sidebar from '../Components/Sidebar';
import Maincomponent from '../Components/Maincomponent';
import "../Styles/Homepage.css"

function Homepage() {
  return (
    <div className='App_container'>
        <div className="main">
          <Sidebar/>
          <Maincomponent/>
          <Rightsidebar />
        </div>
    </div>
  )
}

export default Homepage