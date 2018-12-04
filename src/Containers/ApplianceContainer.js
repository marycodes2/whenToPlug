import React from 'react'
import Appliance from '../Components/Appliance'
import ApplianceData from '../data/applicationsData'


export default class ApplianceContainer extends React.Component {
  state = {
    appliances: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/appliances')
    .then(res => res.json())
    .then(data => this.setState({appliances: data}))

  }


  render(){
    return(
      <div>
        <h1>Select the appliances you use each week</h1>
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
