import React from 'react'
import "../Styles/Events.css"

export default function Events(props) {
    const {eventIcon, eventTitle} = props
  return (
    <div className='event'>
      <div className="events_container">
        <h3>{eventIcon}</h3>
        <p>{eventTitle}</p>
      </div>
    </div>
  )
}
