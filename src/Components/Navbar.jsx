import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SmsIcon from '@mui/icons-material/Sms';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AppsIcon from '@mui/icons-material/Apps';
import AvatarIcon from "@material-ui/core/Avatar";
import Logo from "../Assets/linkedinlogo.png"
import "../Styles/Navbar.css"
import Navicons from './Navicons';

const Navbar = () => {

  return (
    <div className='navbar'>
      <div className="left_navbar">
        <img src={Logo} alt=""  className='logo'/>

        <div className="navbar_search_container">
          <SearchIcon/>
          <input type="text" placeholder='search'/>
        </div>
      </div>

      <div className="sm_messaging">
        <Navicons  icon={<SmsIcon/>}/>
      </div>

      <div className="right_navbar">
        <Navicons label="Home" icon={<HomeIcon/>}/>
        <Navicons label="My Network" icon={<SupervisorAccountIcon/>}/>
        <Navicons label="Jobs" icon={<BusinessCenterIcon/>}/>
        <Navicons label="Messaging" icon={<SmsIcon/>}/>
        <div className="notification_container">
          <Navicons label="Notifications" icon={<NotificationsIcon/>} />
          <span>0</span>
        </div>
        <Navicons label="Me"  imageIcon={<AvatarIcon/>}/>
   
        <div className='work'>
          <Navicons label="Work" icon={<AppsIcon/>} className="work_icon"/>
          <div className="link_text">
            <p>Try Premium for free</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
