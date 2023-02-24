import AvatarIcon from "@material-ui/core/Avatar";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import TuneIcon from '@mui/icons-material/Tune';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from "@mui/icons-material/Search";
import EastIcon from '@mui/icons-material/East';
import React, { useState } from 'react'
import Linkedinads from "../Assets/linkedinads.png"
import Loadlinkedin from "../Assets/Linkedin-logo.png"
import adslinkedin from "../Assets/adsslinkedin.png"
import studio from "../Assets/studio.jpg"
import linkedinframe from "../Assets/linkedinframe.png"
import "../Styles/Rightsidebar.css"
import { UserAuth } from "./Context/AuthContext";

const Rightsidebar = () => {
    const {user} = UserAuth()
    const date = new Date().getFullYear()

    const [ toggleMessaging , setToggleMessaging ] = useState(false)
    const handleClick = () => {
      setToggleMessaging(!toggleMessaging)
    };
  return (
    <div className='right_sidebar'>
      <div className="ads">
        <div className="slider">
          <img src={Linkedinads} alt="ads" className="main_ads_img"/>
          
          <div className="ads2">
            <div className="top">
              <p>Add to your feed</p>
              <h1><i>i</i></h1>
            </div>
            <div className="middle">
              <div className="middle_container">
                <h3><AvatarIcon src={studio} alt="image"/></h3>
                <div className="middle_content">
                  <h4 className="name">John Doe</h4>
                  <p className="occ">Software engineer</p>
                  <button><AddIcon/>{" "} Follow</button>
                </div>
              </div>
              <div className="middle_container">
                <h3><AvatarIcon src={linkedinframe} alt="image"/></h3>
                <div className="middle_content">
                  <h4 className="name">Steve Jobs</h4>
                  <p className="occ">Senior Recruiter</p>
                  <button><AddIcon/>{" "} Follow</button>
                </div>
              </div>
            </div>
            <p className="recommendations">View all recommendations{" "}<EastIcon/> </p>
          </div>

          <div className="ads3">
            <h4 className="ad">Ads{" "} <MoreHorizIcon/></h4>
            <div className="ads3_text">
              <p>{user.displayName}, get better insight with the linkedin insight tag</p>
            </div>

            <div className="ads_img">
              <AvatarIcon src={user?.photoURL}>{user?.email?.charAt(0).toUpperCase()}</AvatarIcon>
              <img src={adslinkedin} alt="adsimage" />
            </div>
            <div className="ads_txt">
              <p>Unlock better results from linkedin Ads</p>
              <button className="ads_btn">Learn more</button>
            </div>
          </div>

        </div>
      </div>
      <div className="right_links">
        <p>about</p>
        <p>availability</p>
        <p>help centre</p>
        <p>privacy & terms</p>
        <p>AD choices</p>
        <p>advertising</p>
        <p>business services</p>
        <p>get the linkedin app</p>
        <p>more</p>
      </div>

      <div className="copy_right">
        <img src={Loadlinkedin} alt="" />
        <p>linkedin corporation {date}</p>
      </div>

      <footer>
        <div className="footer_menu_display">
          <div className="left_side">
            <AvatarIcon src={user && user?.photoURL} className="footer_avatar_icon">{user?.email?.charAt(0).toUpperCase()}</AvatarIcon>
            <p>messaging</p>
          </div>

          <div className="right_side">
            <h4><MoreHorizIcon /></h4>
            <h4><BorderColorIcon /></h4>
            <h4 onClick={handleClick}>{toggleMessaging ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</h4>
          </div>
        </div>
        {toggleMessaging && 
        <div className="footer_messaging_content">
            <div className="navbar_search_container">
              <div className="footer_search">
                <SearchIcon/>
                <input type="text" placeholder='search'/>
              </div>
              <TuneIcon />
            </div>
        </div>}


      </footer>
    </div>
  )
}

export default Rightsidebar
