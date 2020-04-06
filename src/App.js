import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  componentDidMount = async () => {
    await fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(response => response.json())
      .then(data => {
        data["Argentina"].forEach(({ date, confirmed, recovered, deaths }) =>
          console.log(`${date} active cases: ${confirmed - recovered - deaths}`)
        );
      });
  }
  render() {
    return (
      <div className="App">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
