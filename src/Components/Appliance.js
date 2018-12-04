import React from 'react'
import HoursModal from './HoursMod'


class Appliance extends React.Component {
  state = {
    hours: []
  }

  render(){
  return(
    <div className='ui raised card'>
      <div className="center aligned header"><b>
        {this.props.appliance.name}
      </b></div>
      <div className="image">
        <img src={this.props.appliance.image}></img>
      </div>
      <div className="description">
        {this.props.appliance.load} watts/hour
      </div>
      <HoursModal name={this.props.appliance.name}/>
  </div>
  )}
}

export default Appliance
