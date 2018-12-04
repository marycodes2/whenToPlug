import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import HoursData from '../data/timesData'


export default class HoursContainer extends React.Component {

  render(){
    return(
      <div>
        <form>
        {HoursData.map(hourName =>
          <label className="container">
            <Header><b>
            <input type="checkbox"/>
            {" " + hourName}
              <span className="checkmark"></span></b></Header>
          </label>
        )}
        <br></br>
        <div>
          <Header>How many hours would you like to use your {this.props.name} per day?</Header>
          <input type="number"/>
        </div>
        <br></br>
        <input className="ui button"
          type="submit"/>
        </form>
      </div>
    )
  }
}
