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
      <div>
        <div>Appliance Container</div>
        {this.state.appliances.map(app =>
          <Appliance appliance={app}/>)}

      </div>
    )

  }
}
