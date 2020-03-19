import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }

  renderText = () => {
    const a = '5555';
    const b = '2222';
    return (
      <span>{a}</span>
    )
  }

  render() {
    return (
      <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React11111
        </a>
        {this.renderText()}
      </header>
    </div>
    )
  }
}

export default App;
