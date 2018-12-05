import React from 'react'
import Appliance from '../Components/Appliance'
import {Link} from 'react-router-dom'
// import ApplianceData from '../data/applicationsData'


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
        <h1
          style={{color: 'grey'}}>Select the appliances you use each week</h1>
          <button className="ui blue button right">
            <Link className="item" to='/results'>View My Results</Link>
          </button><br></br>
        <br></br>
        <div className="ui six doubling cards">
          <br></br>
        {this.state.appliances.map(app =>
          <Appliance appliance={app}/>)}
        </div>
        <br></br>

      </div>
    )

  }
}
