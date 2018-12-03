import React from 'react'

const Appliance =(props) => {
  return(
    <div className="cell">
    <div className='card'>
      <div className='card-divider'>
        {props.appliance.name}
      </div>
      <img src={props.appliance.image}></img>
      <div className="card-section">
        <h4>{props.appliance.load}</h4>
      </div>
  </div>
  </div>
  )
}

export default Appliance
