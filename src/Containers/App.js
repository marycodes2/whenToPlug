import React, { Component } from 'react';
// import '../App.css';
import ApplianceContainer from './ApplianceContainer'
import HoursContainer from './HoursContainer'
import ResultsContainer from './ResultsContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ResultsContainer />

        </header>

      </div>
    );
  }
}

export default App;
