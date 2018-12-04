import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import HoursData from '../data/timesData'


export default class HoursContainer extends React.Component {
  state = {allHours: [],
          applianceHours: [],
          duration: null}

  componentDidMount() {
    fetch('http://localhost:3000/hours')
    .then(res => res.json())
    .then(data => this.setState({allHours: data}))
  }

  submitForm = (event) => {
    event.preventDefault()
    console.log(this.state.applianceHours)
    fetch('http://localhost:3000/visitor_requests', {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    body: JSON.stringify({visitor_request: {user_id: 1,
                          appliance_id: this.props.appliance.id,
                          hour_ids: this.state.applianceHours,
                          duration: this.state.duration}})})
    // .then(res => res.json())
    // .then(data => console.log(data))

  }

  onCheck = (event) => {
    let id = parseInt(event.currentTarget.id)
    if (event.target.checked) {
      this.setState({applianceHours: [...this.state.applianceHours, id]})
      }
    else {
      let updatedApplianceHours = this.state.applianceHours.filter(period => period !== id)
      this.setState({applianceHours: updatedApplianceHours})
    }
  }

  render(){
    return(
      <div>
        <form
          onSubmit={this.submitForm}>
        {this.state.allHours.map(hourObj =>
          <label className="container">
            <Header><b>
            <input type="checkbox"
              id={hourObj.id}
              onChange={this.onCheck}/>
            {" " + hourObj.period}
              <span className="checkmark"></span></b></Header>
          </label>
        )}
        <br></br>
        <div>
          <Header>How many hours would you like to use your {this.props.appliance.name} per day?</Header>
          <input type="number"
            onChange={(event) => this.setState({duration: parseInt(event.target.value)})}/>
        </div>
        <br></br>
        <input className="ui button"
          type="submit"/>
        </form>
      </div>
    )
  }
}
