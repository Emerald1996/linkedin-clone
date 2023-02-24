import React, { useState } from 'react'
import backgroundIcon from "../Assets/linkedinads.png"
import AvatarIcon from "@material-ui/core/Avatar";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import "../Styles/Sidebar.css"
import Bottomsidebar from './Bottomsidebar';
import { UserAuth } from './Context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const {user, logOut} = UserAuth()
    const navigate = useNavigate()

    const [showLogOut, setShowLogOut] = useState(false)

    const handleLogout = async() => {
        try {
            await logOut()
            navigate("/login")
        } catch (error) {
            console.log(error.message)
        }
    }

    const handleShowLogOut = () => {
        setShowLogOut(!showLogOut)
    }
    return (
    <div className='sidebar'>
        <div className="sidebar_container">
            <img src={backgroundIcon} alt="backgroundImage" />
            <AvatarIcon className='sidebar_about_icon' src={user && user.photoURL}>{user?.email?.charAt(0).toUpperCase()}</AvatarIcon>
            <h2 onClick={handleShowLogOut} style={{color:'rgb(0, 170, 255)', fontFamily: "monospace", fontSize: "12px", letterSpacing: ".2rem" }}>{"WELCOME"}</h2>
            <h4 >{user && user.displayName}</h4>
            {showLogOut && (
                <button className='signOut_btn' onClick={handleLogout}>Log Out</button>
            )}

            <div className="sidebar_result">
                <div className="result">
                    <p>Who's viewed your result</p>
                    <h5 className='result_in_number'>200</h5>
                </div>
                <div className="result">
                    <p>Impressions on your post</p>
                    <h5 className='result_in_number'>3560</h5> 
                </div>
            </div>

            <div className="access_link">
                <p>Access exclusive tools and insights</p>
                <p>🧇 Try Premium for free</p>
            </div>
            <div className="bookmark">
                <BookmarkIcon className="bookmark_icon"/>
                <p>My items</p>
            </div>
        </div>
        <Bottomsidebar/>
    </div>
  )
}

export default Sidebar
