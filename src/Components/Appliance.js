import React from 'react'

const Appliance =(props) => {
  return(
    <div className='card'>
      <div className='card-divider'>
        {props.appliance.name}
      </div>
      <img src={props.appliance.image}></img>

  </div>
  )
}

export default Appliance
