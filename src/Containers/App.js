import React, { Component } from 'react';
import {Route, Link, Switch} from 'react-router-dom'

//home page default
import HomepageLayout from './HomepageLayout'
//click 'get started button to take us to appliance container'
import ApplianceContainer from './ApplianceContainer'
//click 'see results button to take us to results container'
import ResultsContainer from './ResultsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Switch>
            <Route path='/appliances' component={ApplianceContainer} />
            <Route path='/results' component={ResultsContainer} />
            <Route path='/' component={HomepageLayout} />
        </Switch>
        </header>
      </div>
    );
  }
}

export default App;
