import React from 'react'
import Appliance from '../Components/Appliance'
import ApplianceData from '../data/applicationsData'


export default class ApplianceContainer extends React.Component {
  state = {
    appliances: []
  }

  componentDidMount() {
    this.setState({appliances: ApplianceData})
  }


  render(){
    return(
      <div className="grid-container">
        <div className="grid-x grid-padding-x small-up-2 medium-up-3">
        {this.state.appliances.map(app =>
          <Appliance appliance={app}/>)}
        </div>
      </div>
    )

  }
}
