import React, { Component } from 'react';
import Results from '../Components/Results'

class ResultsContainer extends Component {

  state = {
    appliances: []
  }

  componentDidMount() {
    // fetch(`http://localhost:3000/users/${1}`)
    // .then(res => res.json())
    // .then(res => res[0].visitor_requests.forEach(vr => console.log(vr.appliance.name)))

    fetch(`http://localhost:3000/users/${1}`)
    .then(res => res.json())
    .then(data => data[0].visitor_requests.forEach(vr => this.setState({
      appliances: [
        ...this.state.appliances,
        [vr.appliance.name, vr.efficiency_hours]
      ]

    })))

  }
  render() {
    return (
      <div
        style={{color: 'grey'}}>
        <h1
          className='cw'>We recommend that you use your appliances during the following times:</h1>
        {this.state.appliances.map(appliance =>
        <Results key={appliance.id} appliance={appliance} />)}
      </div>
    )
  }
}

export default ResultsContainer;
