import React, { Component } from 'react';
import './App.css';
import TopTable from './components/topTable';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to i2C dashboard</h1>
        </header>
        < TopTable/>
      </div>
    );
  }
}

export default App;
