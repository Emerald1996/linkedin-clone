import React, { useState } from 'react'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GroupsIcon from '@mui/icons-material/Groups';
import TagIcon from '@mui/icons-material/Tag';
import AddIcon from '@mui/icons-material/Add';

import "../Styles/Bottomsidebar.css"

const Bottomsidebar = () => {
    const [ toggleRecent , setToggleRecent ] = useState(false)
    const [ toggleGroups , setToggleGroups ] = useState(false)
    const [ followedHashTag , setFollowedHashTag ] = useState(false)

      const handleClick = () => {
        setToggleRecent(!toggleRecent)
      };
      
      const handleGroups = () => {
        setToggleGroups(!toggleGroups)
      }

      const handleHashTag = () => {
        setFollowedHashTag(!followedHashTag)
      }
  return (
    <div className='bottom_sidebar_container'>
      <div className="bottom_sidebar">
        <h3>Recent</h3>
        <h4 onClick={handleClick}>{toggleRecent ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</h4>
      </div>
        { toggleRecent && (
          <>
          
        <div className="group_frontend_division">
            <TagIcon />
            <h4>Blockchain</h4>
        </div>
       
        <div className="group_frontend_division">
            <GroupsIcon />
            <h4>Frontend web dev...</h4>
        </div>
          </>
        )}

        <div className="group_sidebar">
          <h3>Groups</h3>
          <h4 onClick={handleGroups}>{toggleGroups ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</h4>  
        </div>
        {( toggleGroups && 
          <>
          <div className="group_frontend_division">
            <GroupsIcon />
            <h4>Frontend web dev...</h4>
          </div>
          <p>See all</p>  
          
          </>
        )}

        <div className="events">
            <h3>Events</h3>
            <h4><AddIcon /></h4>
        </div>

        <div className="group_sidebar">
          <h3>Followed Hashtag</h3>
          <h4 onClick={handleHashTag}>{followedHashTag ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}</h4>  
        </div>
        {( followedHashTag && 
          <>
          <div className="group_frontend_division">
            <TagIcon />
            <h4>Blockchain</h4>
          </div>
          <p>See all</p>  
          
          </>
        )}

        <div className="discover">
          <p>Discover more</p>
        </div>
    </div>
  )
}

export default Bottomsidebar
