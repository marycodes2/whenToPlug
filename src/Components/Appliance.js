import React from 'react'
import HoursModal from './HoursMod'


class Appliance extends React.Component {
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
      <div className="ui bottom attached button">
      <i className="add icon"></i>
      Add Appliance</div>
  </div>
  )}
}

export default Appliance
