import React from 'react'
import "../Styles/InputIcons.css"

const InputIcons = (props) => {
  const {icon, title, color} = props
  return (
    <>
      <div className="input_icons_display">
        <h3 style={{color}}>{icon}</h3>
        <p>{title}</p>
      </div>
    </>
  )
}

export default InputIcons