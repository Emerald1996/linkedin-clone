import React from 'react'
import "../Styles/Navicons.css"
import AvatarIcon from "@material-ui/core/Avatar";
import linkedinframe from "../Assets/linkedinframe.png"

const Navicons = (props) => {

  const {imageIcon, label, icon} = props
  return (
    <div className='navicons'>
      {imageIcon && <AvatarIcon src={linkedinframe} className="avatar_icon"/>}
      <h3>{icon}</h3>
      <p>{label}</p>
    </div>
  )
}

export default Navicons


