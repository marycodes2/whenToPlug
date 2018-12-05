import React from 'react'
import Time from './Time'


const Results = props =>{

  return(
    <ul
      className='cw ui card'>
    <h2><b>{props.appliance[0]}<br></br></b></h2>
    {props.appliance[1].map(t =>
    <Time time={t} />)}
    </ul>
  )
}

export default Results
