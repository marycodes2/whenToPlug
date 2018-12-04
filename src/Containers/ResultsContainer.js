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
    .then(res => res[0].visitor_requests.forEach(vr => this.setState({
      appliances: [
        ...this.state.appliances,
        [vr.appliance.name, vr.efficiency_hours]
      ]

    })))

  }
  render() {
    return (
      <div>
        <h2>We recommend that you use your appliances during the following times:</h2>
        {this.state.appliances.map(appliance =>
        <Results appliance={appliance} />)}
      </div>
    )
  }
}

export default ResultsContainer;
