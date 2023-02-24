import React, { Component } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AddBoxIcon from '@mui/icons-material/AddBox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Navicons from './Navicons';
import "../Styles/Footer.css"

export class Footer extends Component {
  render() {
    return (
      <div className="footer_container">
        <div className="footer_icons">
          <Navicons label="Home" icon={<HomeIcon/>}/>
          <Navicons label="My Network" icon={<SupervisorAccountIcon/>}/>
          <Navicons label="post" icon={<AddBoxIcon/>}/>
          <Navicons label="Jobs" icon={<BusinessCenterIcon/>}/>
          <div className="notification_container">
            <Navicons label="Notifications" icon={<NotificationsIcon/>} />
            <span>0</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
