import React, { useState } from 'react'
import AvatarIcon from "@material-ui/core/Avatar";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import LinkIcon from '@mui/icons-material/Link';
import CodeIcon from '@mui/icons-material/Code';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import FlagIcon from '@mui/icons-material/Flag';
import CloseIcon from '@mui/icons-material/Close';

import "../Styles/Posts.css"
import InputIcons from './InputIcons';
import moment from 'moment/moment';
import Events from './Events';

const Posts = ({name, occupation, post, imageUrl, timeStamp}) => {
  const [showEvent , setShowEvent] = useState(false)

  const handleEvent  = () => {
    setShowEvent(!showEvent)
  }
  return (
    <div className='posts' >
      
      {/* <div className="show_event" > */}
        <h4 className="event_display_btn" onClick={handleEvent}><MoreHorizIcon /></h4>
              {showEvent && (
              <>
                <div className="event_display">
                  <CloseIcon className='close_btn' onClick={handleEvent}/>
                  <Events eventIcon={<BookmarkBorderIcon/>}  eventTitle="Save"/>
                  <Events eventIcon={<LinkIcon/>}  eventTitle="Link"/>
                  <Events eventIcon={<CodeIcon/>}  eventTitle="Embed this post"/>
                  <Events eventIcon={<VisibilityOffIcon/>}  eventTitle="I dont want to see this"/>
                  <Events eventIcon={<FlagIcon/>}  eventTitle="Remove post"/>
                
                </div>
              </>)}
      {/* </div> */}
      <div className="post_container">
      <AvatarIcon src={imageUrl}>{occupation?.charAt(0).toUpperCase()}</AvatarIcon>
        <div className="post_user">
          <h3>{name}</h3>
        {/* I used gmail as occupation */}
          <p>{occupation}</p> 
          <p>{moment(timeStamp.toDate().toString()).startOf('hour').fromNow()}</p>
        </div>
      </div>
      <div className="post_info">
        <p>{[post]}</p>
      </div>
      <div className="post_icons">
        <InputIcons icon={<ThumbUpOutlinedIcon/>} title="Like" color="gray"/>
        <InputIcons icon={<ChatOutlinedIcon />} title="Comment" color="gray"/>
        <InputIcons icon={<RepeatOutlinedIcon/>} title="Repost" color="gray"/>
        <InputIcons icon={<SendOutlinedIcon />} title="Send" color="gray" style={{transform: "rotate(90deg)"}}/>
      </div>
    </div>
  )
}

export default Posts
