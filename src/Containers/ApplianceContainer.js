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
        <h1>Please select from the below appliances:</h1>
        <div className="ui six doubling cards">
        {this.state.appliances.map(app =>
          <Appliance appliance={app}/>)}
        </div>
        <br></br>
        <button className="ui green button right">
          View My Results
        </button>
      </div>
    )

  }
}
