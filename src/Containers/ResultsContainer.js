import React, { Component } from 'react';
import Results from '../Components/Results'

class ResultsContainer extends Component {

  state = {
    appliances: [],
    efficiency_hours: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users/${1}`)
    .then(res => res.json())
    .then(res => res[0].visitor_requests.forEach(vr => this.setState({appliances: [...this.state.appliances, vr.appliance.name]})))

    fetch(`http://localhost:3000/users/${1}`)
    .then(res => res.json())
    .then(res => res[0].visitor_requests.forEach(vr => this.setState({efficiency_hours: [...this.state.efficiency_hours, vr.efficiency_hours]})))
  }
  render() {
    return (
      <div>
        Results
        <Results />
      </div>
    )
  }
}

export default ResultsContainer;
