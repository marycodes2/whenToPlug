import React from 'react'

const Results = (props) =>{
  return(
    <div>
    {props.appliance[0]}
    {<ul>props.appliance[1].forEach(time=>
    <li>time</li>)</ul>}
    </div>
  )
}

export default Results
